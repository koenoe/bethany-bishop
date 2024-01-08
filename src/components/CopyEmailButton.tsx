'use client';

import { useState } from 'react';
import { cva, cx } from 'class-variance-authority';
import Button from './Button';

const EMAIL_ADDRESS = 'hello@bethanybishop.co.uk';
const COPY_LABEL = 'Copy';
const COPIED_LABEL = 'Copied!';

export interface CopyEmailButtonProps
  extends React.AllHTMLAttributes<HTMLDivElement> {}

export default function CopyEmailButton({ className }: CopyEmailButtonProps) {
  const [buttonLabel, setButtonLabel] = useState(COPY_LABEL);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setButtonLabel(COPIED_LABEL);
      setTimeout(() => setButtonLabel(COPY_LABEL), 1000); // Reset label after 3 seconds
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div
      className={cx(
        'inline-flex basis-auto content-center items-center bg-black/10',
        className,
      )}
    >
      <p className="text-heading-alt px-4 text-center text-base leading-none md:px-10 md:text-2xl">
        {EMAIL_ADDRESS}
      </p>
      <Button
        intent="primary"
        onClick={handleCopyEmail}
        className="min-w-24 text-nowrap px-4 text-base md:min-w-40 md:py-5"
      >
        {buttonLabel}
      </Button>
    </div>
  );
}
