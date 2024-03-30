'use client';

import { PROJECTS } from '@/data';

import Block from './Block';
import Card from './Card';
import Button from './Button';
import ButtonLink from './ButtonLink';
import Highlight from './Highlight';
import useBreakpoint from '@/hooks/useBreakpoint';
import { useMemo } from 'react';

export interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  project: (typeof PROJECTS)[number];
}

export default function Highlights({ project }: Props) {
  const isLg = useBreakpoint('lg');
  const groups = useMemo(() => {
    const itemsPerGroup = isLg ? 3 : 1;
    const groupSize = Math.ceil(project.highlights.length / itemsPerGroup);
    return Array.from({ length: itemsPerGroup }, (_, i) =>
      project.highlights.slice(i * groupSize, (i + 1) * groupSize),
    );
  }, [isLg, project.highlights]);

  return (
    <Block>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {groups.map((group, index) => (
          <div key={index} className="grid gap-4">
            {group.map((highlight) => (
              <Highlight key={highlight.title} highlight={highlight} />
            ))}
          </div>
        ))}
      </div>
    </Block>
  );
}
