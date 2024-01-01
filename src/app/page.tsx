import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Work from '@/components/Work';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  description: '',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Work />
      <Brands />
      <Contact />
    </>
  );
}
