import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export const metadata: Metadata = {
  description: '',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
