import { type VariantProps } from 'class-variance-authority';
import { card } from './Card';
import Link, { type LinkProps } from 'next/link';
import React, { forwardRef } from 'react';

type CardLinkProps = LinkProps &
  VariantProps<typeof card> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default forwardRef<HTMLAnchorElement, CardLinkProps>(function CardLink(
  { className, ...props },
  ref,
) {
  return <Link ref={ref} className={card({ className })} {...props} />;
});
