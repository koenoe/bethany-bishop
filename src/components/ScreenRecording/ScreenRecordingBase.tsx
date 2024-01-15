'use client';

import { useEffect, useMemo, useRef, useCallback, useState } from 'react';
import { useMotionValue, useMotionValueEvent, useSpring } from 'framer-motion';
import { useThrottledCallback } from 'use-debounce';
import preloadImage from '@/utils/preloadImage';
import useInView from '@/hooks/useInView';
import Spinner from '../Spinner/Spinner';

export type Props = Readonly<{
  height: number;
  framePrefix: string;
  width: number;
  inViewRef: React.RefObject<HTMLDivElement>;
  inViewTreshold?: number;
  totalNumberOfFrames: number;
}>;

const THROTTLE_DURATION = 150; // ms
const SENSITIVITY_FACTOR_TOUCH = 8;
const SENSITIVITY_FACTOR_WHEEL = 2;

const drawImage = (img: HTMLImageElement, ctx: CanvasRenderingContext2D) => {
  const canvas = ctx.canvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
};

const loadFrames = async (framePrefix: string, totalNumberOfFrames: number) => {
  const frames = await Promise.all(
    Array.from({ length: totalNumberOfFrames }, (_, index) => {
      return preloadImage(
        `${framePrefix}${String(index + 1).padStart(4, '0')}.webp`,
      );
    }),
  );
  return frames as HTMLImageElement[];
};

const enableBodyScroll = () => {
  document.body.style.overflow = 'auto';
};

const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

export default function ScreenRecordingBase({
  width,
  framePrefix,
  height,
  inViewRef,
  inViewTreshold = 1,
  totalNumberOfFrames,
}: Props) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const lastLoadedFramePrefix = useRef<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrameRef = useRef(0);
  const lastTouchYRef = useRef(0);
  const frameProgress = useMotionValue(0);
  const progress = useSpring(frameProgress, {
    damping: 50,
    stiffness: 300,
    restSpeed: 0.5,
    restDelta: 0.001,
  });
  const imagesAreLoaded = useMemo(() => images.length > 0, [images]);

  const renderImage = useCallback(
    (p: number) => {
      if (!canvasRef.current) {
        return;
      }

      drawImage(
        images[Math.min(Math.round(images.length * p), images.length - 1)],
        canvasRef.current.getContext('2d') as CanvasRenderingContext2D,
      );
    },
    [images],
  );

  const handleWheel = useThrottledCallback((event: WheelEvent) => {
    if (!canvasRef.current || !imagesAreLoaded) {
      return;
    }

    const { deltaY } = event;
    const direction = deltaY > 0 ? 1 : -1;
    const intensity = Math.abs(deltaY) / SENSITIVITY_FACTOR_WHEEL;
    const lastFrame = totalNumberOfFrames - 1;
    const nextFrame = Math.min(
      Math.max(0, currentFrameRef.current + direction * intensity),
      lastFrame,
    );

    if (
      (direction === 1 && currentFrameRef.current === lastFrame) ||
      (direction === -1 && currentFrameRef.current === 0)
    ) {
      return enableBodyScroll();
    }

    if (event.cancelable) {
      event.preventDefault();
    }

    currentFrameRef.current = nextFrame;
    progress.set(currentFrameRef.current / lastFrame);
  }, THROTTLE_DURATION);

  const handleTouchStart = useThrottledCallback((event: TouchEvent) => {
    if (!canvasRef.current || !imagesAreLoaded) {
      return;
    }

    lastTouchYRef.current = event.touches[0].clientY;
  }, THROTTLE_DURATION);

  const handleTouchMove = useThrottledCallback((event: TouchEvent) => {
    if (!canvasRef.current || !imagesAreLoaded) {
      return;
    }

    const currentTouchY = event.touches[0].clientY;
    const lastTouchY = lastTouchYRef.current;
    const direction = currentTouchY < lastTouchY ? 1 : -1;
    const intensity =
      Math.abs(currentTouchY - lastTouchY) / SENSITIVITY_FACTOR_TOUCH;
    const lastFrame = totalNumberOfFrames - 1;
    const nextFrame = Math.min(
      Math.max(0, currentFrameRef.current + direction * intensity),
      lastFrame,
    );

    if (
      (direction === 1 && currentFrameRef.current === lastFrame) ||
      (direction === -1 && currentFrameRef.current === 0)
    ) {
      return enableBodyScroll();
    }

    if (event.cancelable) {
      event.preventDefault();
    }

    currentFrameRef.current = nextFrame;
    lastTouchYRef.current = currentTouchY;
    progress.set(currentFrameRef.current / lastFrame);
  }, THROTTLE_DURATION);

  const addEventListeners = useCallback(() => {
    inViewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    disableBodyScroll();

    window.addEventListener('wheel', handleWheel, { passive: false });
    if ('ontouchstart' in window) {
      window.addEventListener('touchstart', handleTouchStart, {
        passive: false,
      });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
  }, [handleTouchMove, handleTouchStart, handleWheel, inViewRef]);

  const removeEventListeners = useCallback(() => {
    enableBodyScroll();

    window.removeEventListener('wheel', handleWheel);
    if ('ontouchstart' in window) {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    }
  }, [handleTouchMove, handleTouchStart, handleWheel]);

  useInView(inViewRef, {
    callback: (isInView) => {
      if (isInView) {
        addEventListeners();
      } else {
        removeEventListeners();
      }
    },
    threshold: inViewTreshold,
  });

  useMotionValueEvent(progress, 'change', renderImage);

  useEffect(() => {
    return () => {
      removeEventListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (lastLoadedFramePrefix.current !== framePrefix) {
      lastLoadedFramePrefix.current = null;

      loadFrames(framePrefix, totalNumberOfFrames).then((frames) => {
        setImages(frames);
        if (canvasRef.current) {
          drawImage(
            frames[0],
            canvasRef.current.getContext('2d') as CanvasRenderingContext2D,
          );
        }

        lastLoadedFramePrefix.current = framePrefix;
      });
    }
  }, [framePrefix, totalNumberOfFrames]);

  return (
    <div className="relative w-full">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full"
      />
      {!imagesAreLoaded && (
        <Spinner className="!absolute inset-0 z-50 m-auto" />
      )}
    </div>
  );
}
