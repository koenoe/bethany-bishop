'use client';

import React, { forwardRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PROJECTS } from '@/data';
import PlayIcon from '@/assets/play.svg';

import Button from './Button';
import CardLink from './CardLink';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/variants';

export interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  highlight: (typeof PROJECTS)[number]['highlights'][number];
}

const MotionCardLink = motion(CardLink);
const MotionLink = motion(Link);

export default forwardRef<HTMLDivElement, Props>(function Highlight(
  { highlight },
  ref,
) {
  if ('button' in highlight) {
    return (
      <MotionCardLink
        key={highlight.title}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        href={highlight.button.href}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <h3 className="text-heading-alt text-2xl md:text-3xl">
          {highlight.title}
        </h3>
        <p className="my-6 text-xl leading-relaxed">{highlight.description}</p>
        <Button className="w-full md:w-auto" intent="primary">
          {highlight.button.icon}
          {highlight.button.label}
        </Button>
      </MotionCardLink>
    );
  }

  if ('thumbnail' in highlight) {
    return (
      <MotionLink
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        className="relative block"
        href={highlight.thumbnail.href}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Image
          src={highlight.thumbnail.image.src}
          alt={highlight.thumbnail.image.alt}
          placeholder="blur"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-35" />
        <div className="absolute bottom-0 left-0 flex items-center gap-4 p-6 text-white md:gap-6 md:p-12">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-white/10 backdrop-blur-sm">
            <Image src={PlayIcon} alt="" className="h-4 w-4" />
          </div>
          <h3 className="text-heading-alt text-xs leading-relaxed md:text-base">
            {highlight.title}
          </h3>
        </div>
      </MotionLink>
    );
  }

  return null;
});
