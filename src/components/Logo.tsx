import Image from 'next/image';
import { cx } from 'class-variance-authority';

type Props = Readonly<{
  className?: string;
}>;

export default function Logo({ className }: Props) {
  return (
    <div
      className={cx(
        'flex h-[48px] content-center items-center gap-4',
        className,
      )}
    >
      <Image
        className="bg-primary"
        src="/logo.svg"
        alt="Logo"
        width={48}
        height={48}
        priority
      />
      <span className="font-logo text-3xl leading-none">Bethany Bishop</span>
    </div>
  );
}
