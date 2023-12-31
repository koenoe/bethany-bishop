import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Work from '@/components/Work';
import { HOME_PAGE } from '@/data';

export const metadata: Metadata = {
  title: HOME_PAGE.metadata.title,
  description: HOME_PAGE.metadata.description,
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
