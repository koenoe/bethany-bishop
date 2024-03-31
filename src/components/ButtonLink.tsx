'use client';

import { type VariantProps } from 'class-variance-authority';
import Link, { type LinkProps } from 'next/link';
import React, { forwardRef } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

import { button } from './Button';
import { buttonVariants } from '@/variants';

type ButtonLinkProps = LinkProps &
  VariantProps<typeof button> &
  HTMLMotionProps<'a'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const MotionLink = motion(Link);

export default forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink({ className, intent, ...props }, ref) {
    return (
      <MotionLink
        ref={ref}
        className={button({ intent, className })}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        {...props}
      />
    );
  },
);
