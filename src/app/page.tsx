import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Work from '@/components/Work';

export const metadata: Metadata = {
  description: '',
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
