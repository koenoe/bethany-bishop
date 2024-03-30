import { type VariantProps } from 'class-variance-authority';
import { button } from './Button';
import Link, { type LinkProps } from 'next/link';
import React, { forwardRef } from 'react';

type ButtonLinkProps = LinkProps &
  VariantProps<typeof button> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink({ className, intent, ...props }, ref) {
    return (
      <Link ref={ref} className={button({ intent, className })} {...props} />
    );
  },
);
