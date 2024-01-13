'use client';

import Block from '../Block';

import MacBookPro from '../MacBookPro/MacBookPro';
import { forwardRef } from 'react';
import ScreenRecordingBase, { type Props } from './ScreenRecordingBase';

export default forwardRef<HTMLDivElement, Props>(
  function ScreenRecordingDesktop(
    { framePrefix, totalNumberOfFrames, width, height, ...props },
    ref,
  ) {
    return (
      <Block ref={ref} {...props}>
        <MacBookPro>
          <ScreenRecordingBase
            inViewRef={ref as React.RefObject<HTMLDivElement>}
            framePrefix={framePrefix}
            totalNumberOfFrames={totalNumberOfFrames}
            width={width}
            height={height}
          />
        </MacBookPro>
      </Block>
    );
  },
);
