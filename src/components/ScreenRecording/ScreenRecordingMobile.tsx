'use client';

import { forwardRef } from 'react';

import { PROJECTS } from '@/data';

import Block from '../Block';
import ScreenRecordingBase, { type Props } from './ScreenRecordingBase';
import IPhone14Pro from '../IPhone14Pro/IPhone14Pro';

export default forwardRef<HTMLDivElement, Props>(function ScreenRecordingMobile(
  { framePrefix, totalNumberOfFrames, width, height, ...props },
  ref,
) {
  return (
    <Block ref={ref} {...props}>
      <IPhone14Pro className="mx-auto">
        <ScreenRecordingBase
          inViewRef={ref as React.RefObject<HTMLDivElement>}
          framePrefix={framePrefix}
          totalNumberOfFrames={totalNumberOfFrames}
          width={width}
          height={height}
        />
      </IPhone14Pro>
    </Block>
  );
});
