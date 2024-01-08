import Image from 'next/image';
import { cx } from 'class-variance-authority';
import LogoImage from '@/assets/logo.svg';

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
        className="bg-primary p-[4px]"
        src={LogoImage}
        alt="Logo"
        width={40}
        height={40}
        priority
      />
      <span className="cursor-default font-logo text-3xl leading-none">
        Bethany Bishop
      </span>
    </div>
  );
}
