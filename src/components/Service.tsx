import { HOME_PAGE } from '@/data';
import { cx } from 'class-variance-authority';
import Image from 'next/image';
import Card from './Card';

type Props = (typeof HOME_PAGE.services.items)[number] &
  React.AllHTMLAttributes<HTMLDivElement>;

export default function Service({
  className,
  title,
  icon,
  description,
}: Props) {
  return (
    <Card className={cx('relative p-8 text-justify md:p-10', className)}>
      <Image
        src={icon}
        alt=""
        className={cx(
          'absolute left-[-2rem] top-[-2rem] w-24 md:left-[-2rem] md:top-[-3rem] md:w-36' +
            (title === 'Copywriting' ? 'w-12 md:w-28' : ''),
        )}
      />
      <h3 className="text-heading-alt mb-6 text-center text-2xl md:text-3xl">
        {title}
      </h3>
      <p className="text-xl leading-relaxed">{description}</p>
    </Card>
  );
}
