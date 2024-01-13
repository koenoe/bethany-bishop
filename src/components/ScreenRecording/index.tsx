'use client';

import { useRef } from 'react';

import { PROJECTS } from '@/data';
import useBreakpoint from '@/hooks/useBreakpoint';
import ScreenRecordingDesktop from './ScreenRecordingDesktop';
import ScreenRecordingMobile from './ScreenRecordingMobile';

export type Props = Readonly<{
  project: (typeof PROJECTS)[number];
}>;

export default function ScreenRecording({ project }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isLg = useBreakpoint('lg');

  if (!project.recordings) {
    return null;
  }

  return isLg ? (
    <ScreenRecordingDesktop ref={ref} {...project.recordings.desktop} />
  ) : (
    <ScreenRecordingMobile ref={ref} {...project.recordings.mobile} />
  );
}
