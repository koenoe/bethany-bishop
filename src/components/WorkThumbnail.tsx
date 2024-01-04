import { PROJECTS } from '@/data';
import { cx } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';

type Props = (typeof PROJECTS)[number] &
  React.AllHTMLAttributes<HTMLDivElement>;

export default function WorkThumbnail({ className, thumbnail, slug }: Props) {
  return (
    <Link className={cx('relative', className)} href={`/work/${slug}`}>
      <Image
        src={thumbnail.image.src}
        alt={thumbnail.image.alt}
        className="mb-8 w-full object-contain"
      />
      <h3 className="text-heading-alt text-2xl md:text-3xl">
        {thumbnail.title}
      </h3>
      <span className="my-4 block h-1 w-full bg-primary" />
      <p className="text-xl uppercase leading-relaxed">{thumbnail.subtitle}</p>
    </Link>
  );
}
