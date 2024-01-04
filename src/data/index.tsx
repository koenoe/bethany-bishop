import PencilIcon from '@/assets/pencil.svg';
import GlassesIcon from '@/assets/glasses.svg';
import MagicWandIcon from '@/assets/magic-wand.svg';
import BrandsImage from '@/assets/brands.png';

export const HOME_PAGE = {
  hero: {
    title: 'Boring prose has no place here.',
    subtitle: 'Copywriting and strategy for unabashed brands.',
    link: {
      label: 'Discover more',
      href: '',
    },
  },
  services: {
    title: 'Your story sets you apart',
    description: `Telling it with impact, clarity and emotion is essential to bringing any brand to life. That's where I can help.`,
    items: [
      {
        title: 'Copywriting',
        description: 'Further eloborate on the copywriting service',
        icon: PencilIcon,
      },
      {
        title: 'Proofing and editing',
        description: 'Further eloborate on the editing service',
        icon: GlassesIcon,
      },
      {
        title: 'Branding and tone',
        description: 'Further eloborate on the branding service',
        icon: MagicWandIcon,
      },
    ],
  },
  about: {
    title: (
      <>
        Hiya,
        <br />
        I'm <span className="text-secondary">Beth</span>
      </>
    ),
    description: `Fusce vitae facilisis ligula. Vestibulum est leo, commodo ac
    fermentum vitae, porttitor faucibus magna. Curabitur at sapien
    faucibus, placerat enim eu, hendrerit mi. Praesent sagittis est
    nibh, et vulputate purus molestie ac. Phasellus tempor quam in nunc
    vehicula gravida.`,
    image: {
      src: 'https://placekitten.com/g/600/800',
      alt: 'Beth',
    },
    link: {
      label: `Let's talk, for real!`,
      href: '',
    },
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

export const PROJECTS = [];
