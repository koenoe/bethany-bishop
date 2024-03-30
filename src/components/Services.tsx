'use client';

import { motion } from 'framer-motion';
import { HOME_PAGE } from '@/data';
import Block from './Block';
import Service from './Service';
import { childVariants, containerVariants } from '@/variants';

const MotionService = motion(Service);

export default function Services() {
  return (
    <Block className="text-center">
      <h2 className="mb-4">{HOME_PAGE.services.title}</h2>
      <p className="mx-auto mb-8 max-w-screen-lg text-xl leading-relaxed md:mb-12 md:text-2xl md:leading-relaxed">
        {HOME_PAGE.services.description}
      </p>
      <motion.div
        className="flex flex-col gap-8 lg:flex-row lg:gap-4"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.25 }}
        initial="hidden"
        whileInView="visible"
      >
        {HOME_PAGE.services.items.map((service) => (
          <MotionService
            key={service.title}
            className="w-full lg:w-1/3"
            variants={childVariants}
            {...service}
          />
        ))}
      </motion.div>
    </Block>
  );
}
