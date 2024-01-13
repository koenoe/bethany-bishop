import { cva, type VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';

const block = cva(['w-full', 'md:px-20', 'px-10', 'text-midnight']);

export interface BlockProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof block> {}

export default forwardRef<HTMLDivElement, BlockProps>(function Block(
  { className, children, ...props },
  ref,
) {
  return (
    <div className={block({ className })} {...props} ref={ref}>
      <div className="mx-auto max-w-screen-2xl">{children}</div>
    </div>
  );
});
