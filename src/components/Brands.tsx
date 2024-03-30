'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { HOME_PAGE } from '@/data';
import { childVariants, containerVariants } from '@/variants';
import Block from './Block';

export default function Brands() {
  return (
    <Block>
      <motion.div
        className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:mx-48"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.25 }}
        initial="hidden"
        whileInView="visible"
      >
        {HOME_PAGE.brands.map((brand) => (
          <motion.div
            key={brand.name}
            className="relative flex aspect-square items-center justify-center bg-white p-6 lg:p-10"
            variants={childVariants}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              className="w-full object-contain"
              width={300}
            />
          </motion.div>
        ))}
      </motion.div>
    </Block>
  );
}
