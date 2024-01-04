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
    description: `Telling it with impact, clarity and emotion is what makes a brand stand up and stand out. That’s where I can help.`,
    items: [
      {
        title: 'Copywriting',
        description: 'I can write your website, give your email campaigns a kick or create some stellar micro-copy for your apps and interfaces. I do a mean brochure, too. Whatever your written need, digital or print, I promise authentic writing that people want to read. That’s harder than it sounds.',
        icon: PencilIcon,
      },
      {
        title: 'Proofing and editing',
        description: 'Ok, you’ve got the copy, but it’s not really singing on the page. It’s barely humming. The words are there, but not quite there. Consider me a fresh set of eyes. I’ll help you level up your content so it’s polished, correct and harmonising like the Vienna Philharmonic. ',
        icon: GlassesIcon,
      },
      {
        title: 'Branding and tone',
        description: 'People don’t identify with companies. They identify with brands that speak to who they are, and listen too. Whether you want to finesse your unique tone of voice or set up the strategies that will breathe life and character into your offering, I’ve got you.  ',
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
