'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

import { PROJECTS } from '@/data';
import useBreakpoint from '@/hooks/useBreakpoint';

import Block from './Block';
import Highlight from './Highlight';
import { childVariants, containerVariants } from '@/variants';

export interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  project: (typeof PROJECTS)[number];
}

export default function Highlights({ project }: Props) {
  const isLg = useBreakpoint('lg');
  const groups = useMemo(() => {
    // Determine the number of groups based on the breakpoint.
    const numberOfGroups = isLg ? 3 : 1;
    const totalItems = project.highlights.length;
    let itemsPerGroup = Math.floor(totalItems / numberOfGroups);
    let remainder = totalItems % numberOfGroups;

    // Function to calculate the end index for slicing the array.
    const calculateEndIndex = (startIndex: number, groupIndex: number) => {
      // Add an extra item to the groups until the remainder is distributed.
      return startIndex + itemsPerGroup + (groupIndex < remainder ? 1 : 0);
    };

    let startIndex = 0;
    return Array.from({ length: numberOfGroups }, (_, groupIndex) => {
      const endIndex = calculateEndIndex(startIndex, groupIndex);
      const group = project.highlights.slice(startIndex, endIndex);
      startIndex = endIndex; // Update the start index for the next group.
      return group;
    });
  }, [isLg, project.highlights]);

  return (
    <Block>
      <motion.div
        className="grid grid-cols-1 gap-4 lg:grid-cols-3"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.25 }}
        initial="hidden"
        whileInView="visible"
      >
        {groups.map((group, index) => (
          <motion.div
            key={index}
            className="grid gap-4"
            variants={childVariants}
          >
            {group.map((highlight) => (
              <Highlight key={highlight.title} highlight={highlight} />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </Block>
  );
}
