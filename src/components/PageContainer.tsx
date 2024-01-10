import { cx } from 'class-variance-authority';
import React from 'react';

type PageContainerProps = React.AllHTMLAttributes<HTMLDivElement>;

export default function PageContainer({
  className,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cx('flex flex-col gap-10 py-10 md:gap-20 md:py-20', className)}
      {...props}
    />
  );
}
