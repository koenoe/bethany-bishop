import Image from 'next/image';

// Note: all icons
import PencilIcon from '@/assets/pencil.svg';
import GlassesIcon from '@/assets/glasses.svg';
import MagicWandIcon from '@/assets/magic-wand.svg';
import Beth from '@/assets/beth.jpg';
import CircleArrowIcon from '@/assets/circle-arrow.svg';
import EmailIcon from '@/assets/email.svg';
import PlayIcon from '@/assets/play.svg';
import DocumentIcon from '@/assets/document.svg';
import ExternalLinkIcon from '@/assets/external-link.svg';

// Note: all logos
import BritishIceSkatingLogo from '@/assets/logos/british-ice-skating.gif';
import BritishTaekwondoLogo from '@/assets/logos/british-taekwondo.svg';
import BuzzFeedLogo from '@/assets/logos/buzzfeed.svg';
import GoodHousekeepingLogo from '@/assets/logos/good-housekeeping.svg';
import LightyearLogo from '@/assets/logos/lightyear.svg';
import NtuLogo from '@/assets/logos/ntu.svg';
import RobinRadarLogo from '@/assets/logos/robin-radar.svg';
import TheUpcomingLogo from '@/assets/logos/the-upcoming.svg';

import LightyearThumbnail from '@/assets/projects/lightyear/thumbnail.jpg';
import LightyearIntro from '@/assets/projects/lightyear/intro.jpg';
import LightyearProductionThumbnail from '@/assets/projects/lightyear/highlights/production.jpg';
import LightyearEfficientDesignThumbnail from '@/assets/projects/lightyear/highlights/efficient-design.jpg';
import LightyearCountdownThumbnail from '@/assets/projects/lightyear/highlights/countdown.jpg';
import LightyearSustainabilityThumbnail from '@/assets/projects/lightyear/highlights/sustainability.jpg';
import LightyearSolarChargingThumbnail from '@/assets/projects/lightyear/highlights/solar-charging.jpg';

import NtuThumbnail from '@/assets/projects/ntu/thumbnail.jpg';
import NtuIntro from '@/assets/projects/ntu/intro.jpg';

import RobinRadarThumbnail from '@/assets/projects/robin-radar/thumbnail.jpg';
import RobinRadarIntro from '@/assets/projects/robin-radar/intro.jpg';

export const HOME_PAGE = {
  metadata: {
    title: 'Bethany Bishop',
    description: 'Copywriting and strategy for fearless brands.',
  },
  hero: {
    title: 'Boring prose has no place here.',
    subtitle: 'Copywriting and strategy for fearless brands.',
    buttons: [
      {
        label: 'See my work',
        href: '#work',
        intent: 'outline',
        icon: <Image src={CircleArrowIcon} alt="" />,
      },
      {
        label: 'Say hello',
        href: '#contact',
        intent: 'primary',
        icon: <Image src={EmailIcon} alt="" />,
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
          What I do looks a lot like tapping away at a desk. Possibly with a cat
          on my lap, definitely with a cuppa close to hand.
        </p>
        <p>But let me tell you, it's much more than that.</p>
        <p>
          I'm capturing narrative and distilling it. Thoughts thunder down onto
          the keys and gallop across the screen as I trial, tweak, revise and
          revisit. I'm wrangling for the perfect words, corralling them into
          world-class concepts.
        </p>
        <p>
          And besides, it's a <span className="italic">standing</span> desk.
        </p>
        <p>
          Over the years I've helped heaps of exciting projects off the ground
          and into the big bright world. If you're an innovative brand with bold
          ideas, it could be us rolling towards the horizon together.
        </p>
        <p>What do you say, Partner. Want some words? </p>
      </>
    ),
    image: {
      src: Beth,
      alt: 'Beth',
    },
    button: {
      label: `Let's talk, for real!`,
      href: '#contact',
    },
  },
  services: {
    title: 'Your story sets you apart',
    description: (
      <>
        Telling it with impact, clarity and emotion is what makes a brand stand
        up and stand out.
        <br />
        That's where I can help.
      </>
    ),
    items: [
      {
        title: 'Copywriting',
        description: `I can write your website, give your email campaigns a kick or create some stellar micro-copy for your apps and interfaces. I do a mean brochure, too. Whatever your written need, digital or print, I promise authentic writing that people actually want to read. That's harder than it sounds.`,
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
        description: `People don't identify with companies. They identify with brands that speak to who they are, and listen too. Whether you want to finesse your unique tone of voice, inject personality into your products, or set up strategies that breathe life and character into your offering, I've got you.`,
        icon: MagicWandIcon,
      },
    ],
  },
  work: {
    title: 'A closer look at my work',
  },
  brands: [
    {
      name: 'Good Housekeeping',
      logo: GoodHousekeepingLogo,
    },
    {
      name: 'BuzzFeed',
      logo: BuzzFeedLogo,
    },
    {
      name: 'Nottingham Trent University',
      logo: NtuLogo,
    },
    {
      name: 'Lightyear',
      logo: LightyearLogo,
    },
    {
      name: 'Robin Radar',
      logo: RobinRadarLogo,
    },
    {
      name: 'British Taekwondo',
      logo: BritishTaekwondoLogo,
    },
    {
      name: 'British Ice Skating',
      logo: BritishIceSkatingLogo,
    },
    {
      name: 'The Upcoming',
      logo: TheUpcomingLogo,
    },
  ],
  contact: {
    title: 'Drop me a line any time',
    description: (
      <>
        Whether you have a question, a project idea, or just want to say hello,
        I'd love to hear from you.
        <br />
        Reach out, let's have a chat
      </>
    ),
  },
} as const;

export const PROJECTS = [
  {
    slug: 'lightyear',
    thumbnail: {
      title: 'Lightyear Cars',
      subtitle: 'Solar electric mobility',
      image: {
        src: LightyearThumbnail,
        alt: 'Lightyear Cars',
      },
      label: 'Read more',
    },
    intro: {
      title: 'Range gifted by sunlight',
      description: (
        <>
          <p>
            Humans are instinctive travellers. We've wandered nomadically for
            centuries, pressed to conquer the horizon.
          </p>
          <p>
            Mobility began as an instinct, but today it's essential, and our
            need to move has taken us a step too far. The energy crisis is
            enduring. Climate change is advancing.
          </p>
          <p>
            At Lightyear, we believe the time has come to engineer a new
            reality. Like our ancestors, we'll break ground. We'll let curiosity
            lead as we forge paths to a more balanced world.
          </p>
          <p>
            There will be no looking back at the way things should have been,
            only ahead to what could be.
          </p>
          <p>Solar electric cars that flip the script for a cleaner future.</p>
        </>
      ),
      image: {
        src: LightyearIntro,
        alt: 'Lightyear Cars',
      },
      button: {
        label: 'Learn more',
        href: '#screen-recording',
        icon: <Image src={CircleArrowIcon} alt="" />,
      },
    },
    highlights: [
      {
        title: 'Lightyear launch teaser - Countdown to a zero emission future',
        thumbnail: {
          image: {
            src: LightyearCountdownThumbnail,
            alt: 'Lightyear Cars',
          },
          href: '/lightyear/countdown.mp4',
        },
      },
      {
        title: 'Solar panels on any car — the versatility of Lightyear’s technology',
        description: `Learn how Lightyear's technology can gift any EV with limitless power.`,
        button: {
          label: 'Read my blog',
          href: 'https://lightyear.one/articles/solar-panels-on-any-car-the-versatility-of-lightyear-s-solar-technology',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title:
          'Solar charging explained - Discover solar electric vehicles (SEVs)',
        thumbnail: {
          image: {
            src: LightyearSolarChargingThumbnail,
            alt: 'Solar charging explined - Discover solar electric vehicles (SEVs)',
          },
          href: '/lightyear/solar-charging.mp4',
        },
      },
      {
        title: 'Good for the planet, good for you',
        description: `Head to the homepage for a glimpse at innovation soaked in sunshine.`,
        button: {
          label: 'Read my webpage',
          href: 'https://lightyear.one/',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'Sustainable driving explained - Designed for the planet',
        thumbnail: {
          image: {
            src: LightyearSustainabilityThumbnail,
            alt: 'Sustainabile driving explained - Planet-concious design',
          },
          href: '/lightyear/sustainability.mp4',
        },
      },
      {
        title: 'Clean mobility for everyone, everywhere',
        description: `The mission to reverse a lightyear driven on fossil fuels.`,
        button: {
          label: 'Read my webpage',
          href: 'https://lightyear.one/impact,
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'Efficiency explained - Built for unmatched economy',
        thumbnail: {
          image: {
            src: LightyearEfficientDesignThumbnail,
            alt: 'Efficiency explained - Built for unmatched economy',
          },
          href: '/lightyear/efficient-design-explained.mp4',
        },
      },
      {
        title: 'An automotive switch — Solar electric driving explained',
        description: `Imagine range that expanded with every ray.`,
        button: {
          label: 'Read my blog',
          href: 'https://lightyear.one/articles/an-automotive-switch-solar-technology-will-become-the-norm-for-limitless-electric-driving',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
      {
        title: 'Lightyear 0 production campaign - Production has started',
        thumbnail: {
          image: {
            src: LightyearProductionThumbnail,
            alt: 'Lightyear 0 production campaign - Production has started',
          },
          href: '/lightyear/production.mp4',
        },
      },

      {
        title: '10 things you may not know about solar technology',
        description: `Discover the origins of solar energy as we unpick how the sun gifts power to the earth.`,
        button: {
          label: 'Read my blog',
          href: 'https://lightyear.one/articles/ten-things-you-may-not-know-about-solar-technology',
          icon: <Image src={ExternalLinkIcon} alt="" />,
        },
      },
    ],
    recordings: {
      desktop: {
        width: 1920,
        height: 1080,
        totalNumberOfFrames: 587,
        framePrefix: '/lightyear/frames/desktop/frame_',
      },
      mobile: {
        width: 390,
        height: 830,
        totalNumberOfFrames: 340,
        framePrefix: '/lightyear/frames/mobile/frame_',
      },
      button: {
        label: 'Visit website',
        href: 'https://lightyear.one/lightyear-2',
        icon: <Image src={ExternalLinkIcon} alt="" />,
      },
    },
  },
  // {
  //   slug: 'ntu',
  //   thumbnail: {
  //     title: 'Notts Trent University',
  //     subtitle: 'Inspiring sport in higher education',
  //     image: {
  //       src: NtuThumbnail,
  //       alt: 'Notts Trent University',
  //     },
  //     label: 'Read more',
  //   },
  //   intro: {
  //     title: 'Love sport? Join the club!',
  //     description: (
  //       <>
  //         <p>
  //           Did you know that taking part in fitness and sport could boost your
  //           academic studies? Really! Regular exercise can help reduce stress,
  //           increase your energy levels and – for those lectures – boost
  //           concentration.
  //         </p>
  //         <p>
  //           So, whether you're wanting to hone your skills in a familiar field
  //           or jump feet-first into a whole new ball game, we've got you. With
  //           over 60 sports clubs to try, heaps of fun commitment-free sessions
  //           and outstanding fitness facilities, you can participate at your own
  //           pace.
  //         </p>
  //         <p>
  //           Come along to the Freshers Fair NTU Sport stand to find out more
  //           about the clubs, classes and sessions we know you'll love.
  //         </p>
  //       </>
  //     ),
  //     image: {
  //       src: NtuIntro,
  //       alt: 'Notts Trent University',
  //     },
  //     button: {
  //       label: 'Browse the brochure',
  //       href: '/ntu/brochure.pdf',
  //       icon: <Image src={DocumentIcon} alt="" />,
  //     },
  //   },
  //   highlights: [
  //     {
  //       title: `Student Claire hopes charity challenge will help change the world for disabled skiers and snowboarders`,
  //       description: `NTU student Claire Ryan is pushing 200km to raise money and awareness for Snow Buddies UK, a charity that supports skiers and snowboarders with disabilities.`,
  //       button: {
  //         label: 'Read blog',
  //         href: 'https://www.ntu.ac.uk/about-us/news/news-articles/2019/08/student-claire-hopes-charity-challenge-will-help-change-the-world-for-disabled-skiers-and-snowboarders',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //     {
  //       title: 'This Girl Can Week returns to NTU',
  //       description: `Trent This Girl Can Week is back, and we can't wait for female students to enjoy all that we have in store!`,
  //       button: {
  //         label: 'Read blog',
  //         href: 'https://www.ntu.ac.uk/about-us/news/news-articles/2018/10/this-girl-can-week-returns-to-ntu',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //     {
  //       title:
  //         'NTU Welcome world tennis stars to campus for Nature Valley Open',
  //       description: `World tennis stars flock to NTU's Centre after unprecedented summer rainfall puts Nature Valley Open grass pitches out of play this June.`,
  //       button: {
  //         label: 'Read blog',
  //         href: 'https://www.ntu.ac.uk/about-us/news/news-articles/2019/06/ntu-welcome-world-tennis-stars-to-campus-for-nature-valley-open',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //     {
  //       title: 'Varsity full-time roundup',
  //       description: `With the Varsity 2018 now concluded, we look back on NTU's sporting performances across a very exciting series.`,
  //       button: {
  //         label: 'Read blog',
  //         href: 'https://www.ntu.ac.uk/about-us/news/news-articles/2018/05/varsity-full-time-roundup',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //   ],
  //   recordings: null,
  // },
  // {
  //   slug: 'robin-radar',
  //   thumbnail: {
  //     title: 'Robin Radar',
  //     subtitle: 'Writing leading B2B technology',
  //     image: {
  //       src: RobinRadarThumbnail,
  //       alt: 'Robin Radar',
  //     },
  //     label: 'Read more',
  //   },
  //   intro: {
  //     title: 'Radar love',
  //     description: (
  //       <>
  //         <p>
  //           We are Robin Radar Systems. Technology leader in tracking and
  //           classification of small objects in airspace.
  //         </p>
  //         <p>
  //           Our technology is installed all over the globe, but it all started
  //           in The Netherlands. In cooperation with the Royal Netherlands Air
  //           Force, and later, the European Space Agency (ESA), TNO began
  //           developing unique algorithms to use radar. The technology had huge
  //           potential, and Robin Radar Systems was spun out of TNO in 2010. The
  //           rest, as they say, is history.
  //         </p>
  //         <p>A lot has changed since, and today’s market demands even more.</p>
  //         <p>
  //           Every day, airports and airfields are confronted with the difficult
  //           task of mitigating the risk of bird strikes. Then there’s drones,
  //           the entirely unpredictable threat plaguing defence and security
  //           teams and critical infrastructure.
  //         </p>
  //         <p>
  //           Our radars have been developed for these very challenges. Unlike
  //           human observers, radars don’t need rest and can see in all weather,
  //           day and night. They provide detailed insight in real-time and
  //           distinguish birds from drones with innovative micro-doppler
  //           technology.
  //         </p>
  //         <p>
  //           They're built for accuracy, durability and ease of use. You don't
  //           have to be a rocket scientist to operate our systems, you don't even
  //           need to be a radar scientist!
  //         </p>
  //         <p>
  //           But don't just take our word for it. Reach out for a demonstration
  //           today.
  //         </p>
  //       </>
  //     ),
  //     image: {
  //       src: RobinRadarIntro,
  //       alt: 'Robin Radar',
  //     },
  //     button: {
  //       label: 'Browse the brochure',
  //       href: '',
  //       icon: <Image src={DocumentIcon} alt="" />,
  //     },
  //   },
  //   highlights: [
  //     {
  //       title: 'An electric shift - Solar electric vehicles explained',
  //       description: `A powerful shift — why it'll take more than conventional electric vehicles to scale clean mobility.`,
  //       button: {
  //         label: 'Read more',
  //         href: '',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //     {
  //       title: 'Unmatched economy - Efficient design explained',
  //       description: `A powerful shift — why it'll take more than conventional electric vehicles to scale clean mobility.`,
  //       button: {
  //         label: 'Read more',
  //         href: '',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //     {
  //       title: 'Scripting sustainable mobility - Lightyear 0 production video',
  //       description: `A powerful shift — why it'll take more than conventional electric vehicles to scale clean mobility.`,
  //       button: {
  //         label: 'Read more',
  //         href: '',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //     {
  //       title: 'Product launch - solar electric specs',
  //       description: `A powerful shift — why it'll take more than conventional electric vehicles to scale clean mobility.`,
  //       button: {
  //         label: 'Read more',
  //         href: '',
  //         icon: <Image src={ExternalLinkIcon} alt="" />,
  //       },
  //     },
  //   ],
  //   recordings: null,
  // },
] as const;
