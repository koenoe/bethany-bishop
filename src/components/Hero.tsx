'use client';

import { motion } from 'framer-motion';

import { HOME_PAGE } from '@/data';
import Block from './Block';
import Logo from './Logo';
import ButtonLink from './ButtonLink';
import { containerVariants, childVariants } from '@/variants';

const MotionButtonLink = motion(ButtonLink);

export default function Hero() {
  return (
    <Block className="bg-secondary py-10 !text-white md:py-20">
      <Logo className="mb-10 md:mb-16" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={childVariants}
          className="mb-8 cursor-default leading-tight md:max-w-4xl md:leading-tight"
        >
          {HOME_PAGE.hero.title}
        </motion.h1>
        <motion.h2
          variants={childVariants}
          className="text-heading-alt mb-10 cursor-default text-2xl leading-relaxed md:mb-16 md:text-4xl md:leading-relaxed"
        >
          {HOME_PAGE.hero.subtitle}
        </motion.h2>
        <div className="flex flex-row gap-4">
          {HOME_PAGE.hero.buttons.map((button, index) => (
            <MotionButtonLink
              key={button.label}
              intent={button.intent}
              className="grow text-nowrap md:grow-0"
              href={button.href}
              variants={childVariants}
            >
              {button.icon}
              {button.label}
            </MotionButtonLink>
          ))}
        </div>
      </motion.div>
    </Block>
  );
}
