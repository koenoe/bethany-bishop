import Image from 'next/image';

import Block from './Block';
import Card from './Card';

import EmailIcon from '@/assets/email.svg';

import { HOME_PAGE } from '@/data';
import ButtonLink from './ButtonLink';

export default function About() {
  return (
    <Block>
      <div className="flex flex-col lg:flex-row">
        <div className="relative mb-6 ml-auto w-full lg:mb-0 lg:mr-[-2%] lg:mt-24 lg:max-w-[375px]">
          <Image
            className="w-full object-contain"
            src={HOME_PAGE.about.image.src}
            alt={HOME_PAGE.about.image.alt}
            priority
          />
        </div>
        <Card className="md:px-28">
          <h2 className="mb-6 text-4xl leading-none text-white md:mb-8 md:text-6xl md:leading-none [&>span:first-child]:ml-[-1rem] [&>span]:mb-1 [&>span]:bg-secondary [&>span]:px-2 [&>span]:pb-1 [&>span]:pt-4 [&>span]:md:mb-2">
            {HOME_PAGE.about.title}
          </h2>
          <div className="mb-6 text-justify text-xl md:mb-8 md:text-2xl md:leading-relaxed [&>p]:mb-4">
            {HOME_PAGE.about.description}
          </div>
          <ButtonLink
            intent="primary"
            className="w-full md:w-auto"
            href={HOME_PAGE.about.button.href}
          >
            <Image src={EmailIcon} alt="" />
            {HOME_PAGE.about.button.label}
          </ButtonLink>
        </Card>
      </div>
    </Block>
  );
}
