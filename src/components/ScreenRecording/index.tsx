'use client';

import { PROJECTS } from '@/data';
import useBreakpoint from '@/hooks/useBreakpoint';
import ScreenRecordingDesktop from './ScreenRecordingDesktop';
import ScreenRecordingMobile from './ScreenRecordingMobile';
import ButtonLink from '../ButtonLink';
import Block from '../Block';

export type Props = Readonly<{
  project: (typeof PROJECTS)[number];
}>;

export default function ScreenRecording({ project }: Props) {
  const isLg = useBreakpoint('lg');

  if (!project.recordings) {
    return null;
  }

  return (
    <Block className="text-center">
      {isLg ? (
        <ScreenRecordingDesktop {...project.recordings.desktop} />
      ) : (
        <ScreenRecordingMobile {...project.recordings.mobile} />
      )}
      {project.recordings.button && (
        <ButtonLink
          intent="primary"
          href={project.recordings.button.href}
          className="mx-auto mt-10 w-full md:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.recordings.button.icon}
          {project.recordings.button.label}
        </ButtonLink>
      )}
    </Block>
  );
}
