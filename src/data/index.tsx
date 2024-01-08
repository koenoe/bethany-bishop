import PencilIcon from '@/assets/pencil.svg';
import GlassesIcon from '@/assets/glasses.svg';
import MagicWandIcon from '@/assets/magic-wand.svg';
import BrandsImage from '@/assets/brands.png';

import LightyearThumbnail from '@/assets/projects/lightyear.jpg';
import NtuThumbnail from '@/assets/projects/ntu.jpg';
import RobinRadarThumbnail from '@/assets/projects/robin-radar.jpg';
import Beth from '@/assets/beth.jpg';

export const HOME_PAGE = {
  hero: {
    title: 'Boring prose has no place here.',
    subtitle: 'Copywriting and strategy for unabashed brands.',
    buttons: [
      {
        label: 'See my work',
        href: '',
        intent: 'outline',
      },
      {
        label: 'Say hello',
        href: '',
        intent: 'primary',
      },
    ],
  },
  about: {
    title: (
      <>
        <span className="inline-block">Hiya,</span>
        <br />
        <span className="inline-block">
          I'm <strong>Beth</strong>
        </span>
      </>
    ),
    description: (
      <>
        <p>
          To most, what I do looks a lot like tapping away at a desk. Possibly
          with a cat on my lap, definitely with a cuppa close to hand.
        </p>
        <p>But let me tell you, it's much more than that.</p>
        <p>
          I'm capturing narrative and distilling it. Thoughts thunder down onto
          the keys and gallop across the screen as I trial, tweak, revise and
          revisit. I'm wrangling for the perfect words, corralling them into
          world-class concepts.
        </p>
        <p>
          And besides, it's a<span className="italic">standing</span> desk.
        </p>
        <p>
          Over the years I've helped heaps of exciting projects off the ground
          and into the big bright world. If you're an innovative brand with bold
          ideas, it could be us rolling towards the horizon and into our next
          adventure.
        </p>
        <p>What do you say, Partner. Want some words? </p>
      </>
    ),
    image: {
      src: Beth,
      alt: 'Beth',
    },
    link: {
      label: `Let's talk, for real!`,
      href: '',
    },
  },
  services: {
    title: 'Your story sets you apart',
    description: `Telling it with impact, clarity and emotion is what makes a brand stand up and stand out. That's where I can help.`,
    items: [
      {
        title: 'Copywriting',
        description: `I can write your website, give your email campaigns a kick or create some stellar micro-copy for your apps and interfaces. I do a mean brochure, too. Whatever your written need, digital or print, I promise authentic writing that people want to read. That's harder than it sounds.`,
        icon: PencilIcon,
      },
      {
        title: 'Proofing and editing',
        description: (
          <>
            Ok, you've got the copy, but it's not really singing on the page.
            It's barely humming. The words are there, but not quite{' '}
            <span className="italic">there</span>. Consider me a fresh set of
            eyes. I'll help you level up your content so it's polished, correct
            and harmonising like the Vienna Philharmonic.
          </>
        ),
        icon: GlassesIcon,
      },
      {
        title: 'Branding and tone',
        description: `People don't identify with companies. They identify with brands that speak to who they are, and listen too. Whether you want to finesse your unique tone of voice or set up the strategies that will breathe life and character into your offering, I've got you.`,
        icon: MagicWandIcon,
      },
    ],
  },
  work: {
    title: 'A closer look at my work',
  },
  brands: {
    image: {
      src: BrandsImage,
      alt: 'Brands I have worked with',
    },
  },
  contact: {
    title: 'Drop me a line any time.',
    description: `Whether you have a question, a project idea, or just want to say hello, I'd love to hear from you. Reach out and let's start a conversation.`,
  },
} as const;

export const PROJECTS = [
  {
    slug: 'lightyear',
    thumbnail: {
      title: 'Lightyear Cars',
      subtitle: 'Scripting sustainable futures',
      image: {
        src: LightyearThumbnail,
        alt: 'Lightyear Cars',
      },
    },
  },
  {
    slug: 'ntu',
    thumbnail: {
      title: 'Notts Trent University',
      subtitle: 'Inspiring sport in higher education',
      image: {
        src: NtuThumbnail,
        alt: 'Notts Trent University',
      },
    },
  },
  {
    slug: 'robin-radar',
    thumbnail: {
      title: 'Robin Radar',
      subtitle: 'Writing revolutionary B2B tech',
      image: {
        src: RobinRadarThumbnail,
        alt: 'Robin Radar',
      },
    },
  },
] as const;
