'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import EmailIcon from '@/assets/email.svg';
import { HOME_PAGE } from '@/data';
import ButtonLink from './ButtonLink';
import Intro from './Intro';
import { childVariants, containerVariants } from '@/variants';

const MotionIntro = motion(Intro);
const MotionImage = motion(Image);

export default function About() {
  return (
    <MotionIntro
      variants={containerVariants}
      viewport={{ once: true, amount: 0.1 }}
      initial="hidden"
      whileInView="visible"
      image={
        <MotionImage
          variants={childVariants}
          src={HOME_PAGE.about.image.src}
          alt={HOME_PAGE.about.image.alt}
        />
      }
      title={
        <motion.h2
          variants={childVariants}
          className="mb-6 cursor-default text-4xl leading-none text-white md:mb-8 md:text-6xl md:leading-none [&>span:first-child]:ml-[-1rem] [&>span]:mb-1 [&>span]:bg-secondary [&>span]:px-2 [&>span]:pb-1 [&>span]:pt-4 [&>span]:md:mb-2"
        >
          {HOME_PAGE.about.title}
        </motion.h2>
      }
      description={
        <motion.div variants={childVariants}>
          {HOME_PAGE.about.description}
        </motion.div>
      }
      button={
        <ButtonLink intent="primary" href={HOME_PAGE.about.button.href}>
          <Image src={EmailIcon} alt="" />
          {HOME_PAGE.about.button.label}
        </ButtonLink>
      }
    />
  );
}
