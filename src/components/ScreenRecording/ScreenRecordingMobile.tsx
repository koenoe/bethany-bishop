'use client';

import { useRef } from 'react';

import ScreenRecordingBase, { type Props } from './ScreenRecordingBase';
import IPhone14Pro from '../IPhone14Pro/IPhone14Pro';

export default function ScreenRecordingMobile({
  framePrefix,
  totalNumberOfFrames,
  width,
  height,
}: Omit<Props, 'inViewRef'>) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <IPhone14Pro className="mx-auto" ref={ref}>
      <ScreenRecordingBase
        inViewRef={ref}
        inViewTreshold={0.5}
        framePrefix={framePrefix}
        totalNumberOfFrames={totalNumberOfFrames}
        width={width}
        height={height}
      />
    </IPhone14Pro>
  );
}
