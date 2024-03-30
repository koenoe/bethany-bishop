'use client';

import { useRef } from 'react';

import ScreenRecordingBase, { type Props } from './ScreenRecordingBase';
import MacBookPro from '../MacBookPro/MacBookPro';

export default function ScreenRecordingDesktop({
  framePrefix,
  totalNumberOfFrames,
  width,
  height,
}: Omit<Props, 'inViewRef'>) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <MacBookPro ref={ref} id="screen-recording">
      <ScreenRecordingBase
        inViewRef={ref}
        framePrefix={framePrefix}
        totalNumberOfFrames={totalNumberOfFrames}
        width={width}
        height={height}
      />
    </MacBookPro>
  );
}
