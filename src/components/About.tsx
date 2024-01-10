import Image from 'next/image';

import EmailIcon from '@/assets/email.svg';

import { HOME_PAGE } from '@/data';
import ButtonLink from './ButtonLink';
import Intro from './Intro';

export default function About() {
  return (
    <Intro
      image={
        <Image
          src={HOME_PAGE.about.image.src}
          alt={HOME_PAGE.about.image.alt}
        />
      }
      title={
        <h2 className="mb-6 text-4xl leading-none text-white md:mb-8 md:text-6xl md:leading-none [&>span:first-child]:ml-[-1rem] [&>span]:mb-1 [&>span]:bg-secondary [&>span]:px-2 [&>span]:pb-1 [&>span]:pt-4 [&>span]:md:mb-2">
          {HOME_PAGE.about.title}
        </h2>
      }
      description={HOME_PAGE.about.description}
      button={
        <ButtonLink intent="primary" href={HOME_PAGE.about.button.href}>
          <Image src={EmailIcon} alt="" />
          {HOME_PAGE.about.button.label}
        </ButtonLink>
      }
    />
  );
}
