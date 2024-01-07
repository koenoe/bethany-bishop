import Image from 'next/image';
import Block from './Block';
import Button from './Button';
import { HOME_PAGE } from '@/data';

export default function About() {
  return (
    <Block intent="primary">
      <div className="flex flex-col md:flex-row">
        <div className="order-2 md:order-1 md:pr-48">
          <h2 className="mb-6 leading-normal md:mb-8 md:text-6xl md:leading-normal">
            {HOME_PAGE.about.title}
          </h2>
          <div className="mb-6 text-lg md:mb-8 md:text-xl [&>p]:mb-4">
            {HOME_PAGE.about.description}
          </div>
          <Button intent="secondary">{HOME_PAGE.about.link.label}</Button>
        </div>
        <div className="relative order-1 mb-6 ml-auto w-full max-w-[375px] md:order-2 md:mb-0">
          <Image
            className="w-full rounded-full object-contain"
            src={HOME_PAGE.about.image.src}
            alt={HOME_PAGE.about.image.alt}
          />
        </div>
      </div>
    </Block>
  );
}
