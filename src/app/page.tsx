import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';

export const metadata: Metadata = {
  description: '',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
    </>
  );
}
