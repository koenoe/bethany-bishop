'use client';

import { useState } from 'react';
import Button from './Button';

const EMAIL_ADDRESS = 'hello@bethanybishop.co.uk';
const COPY_LABEL = 'Copy';
const COPIED_LABEL = 'Copied!';

export default function CopyEmailButton() {
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
    <div className="flex content-center items-center gap-4">
      <p className="text-heading-alt leading-none md:text-xl">
        {EMAIL_ADDRESS}
      </p>
      <Button intent="neutral" onClick={handleCopyEmail}>
        {buttonLabel}
      </Button>
    </div>
  );
}
