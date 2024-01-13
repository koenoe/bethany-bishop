'use client';

import { useEffect, useMemo, useRef, useCallback } from 'react';
import {
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from 'framer-motion';
import { useThrottledCallback } from 'use-debounce';

export type Props = Readonly<{
  height: number;
  framePrefix: string;
  width: number;
  inViewRef?: React.RefObject<HTMLDivElement>;
  totalNumberOfFrames: number;
}>;

const drawImage = (img: HTMLImageElement, ctx: CanvasRenderingContext2D) => {
  const canvas = ctx.canvas;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
};

export default function ScreenRecordingBase({
  width,
  framePrefix,
  height,
  inViewRef,
  totalNumberOfFrames,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrameRef = useRef(0);
  const isInView = useInView(inViewRef ?? ref, { amount: 'all' });
  const frameProgress = useMotionValue(0);
  const progress = useSpring(frameProgress, {
    damping: 50,
    stiffness: 300,
    restSpeed: 0.5,
    restDelta: 0.001,
  });

  const images = useMemo(() => {
    if (typeof window === 'undefined') {
      return [];
    }

    return Array.from({ length: totalNumberOfFrames }, (_, index) => {
      const img = new Image();
      img.src = `${framePrefix}${String(index + 1).padStart(4, '0')}.webp`;
      return img;
    });
  }, [framePrefix, totalNumberOfFrames]);

  const renderImage = useCallback(
    (p: number) => {
      if (!canvasRef.current) {
        return;
      }

      drawImage(
        images[Math.min(Math.round(images.length * p), images.length - 1)],
        canvasRef.current!.getContext('2d') as CanvasRenderingContext2D,
      );
    },
    [images],
  );

  const handleWheel = useThrottledCallback((event: WheelEvent) => {
    if (!canvasRef.current) {
      return;
    }

    event.preventDefault();

    const { deltaY } = event;

    // Determine scroll direction (positive for down, negative for up)
    const scrollDirection = deltaY > 0 ? 1 : -1;

    // Calculate scroll intensity based on deltaY
    const scrollIntensity = Math.abs(deltaY);

    const lastFrame = totalNumberOfFrames - 1;

    if (
      (scrollDirection === 1 && currentFrameRef.current === lastFrame) ||
      (scrollDirection === -1 && currentFrameRef.current === 0)
    ) {
      document.body.style.overflow = '';
      return;
    }

    // Calculate the current frame based on scroll direction and progress
    currentFrameRef.current = Math.min(
      Math.max(0, currentFrameRef.current + scrollDirection * scrollIntensity),
      lastFrame,
    );

    // Update progress
    progress.set(currentFrameRef.current / lastFrame);
  }, 100);

  useEffect(() => {
    renderImage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isInView) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = '';
    };
  }, [handleWheel, isInView]);

  useMotionValueEvent(progress, 'change', renderImage);

  return (
    <div className="relative w-full bg-black" ref={ref}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full"
      />
    </div>
  );
}
