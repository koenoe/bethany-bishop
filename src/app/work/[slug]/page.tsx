import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { PROJECTS } from '@/data';
import Logo from '@/components/Logo';
import PageContainer from '@/components/PageContainer';
import Intro from '@/components/Intro';
import Contact from '@/components/Contact';
import Highlights from '@/components/Highlights';
import ButtonLink from '@/components/ButtonLink';

type Params = Readonly<{
  slug: string;
}>;

const findProject = (slug: string) =>
  PROJECTS.find((project) => project.slug === slug);

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = findProject(params.slug);

  if (!project) {
    return notFound();
  }

  return {
    title: project.thumbnail.title,
    description: project.thumbnail.subtitle,
  };
}

export default function WorkPage({ params }: { params: Params }) {
  const project = findProject(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <div className="relative h-[375px] w-full overflow-hidden p-10 text-white md:h-[550px] md:p-20">
        <Image
          src={project.thumbnail.image.src}
          alt={project.thumbnail.image.alt}
          className="absolute inset-0 h-full w-full scale-105 object-cover blur"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black opacity-35" />
        <div className="relative mx-auto h-full w-full max-w-screen-2xl">
          <Logo className="mb-10 md:mb-16" />
          <div className="absolute bottom-0 left-0">
            <p className="text-xl leading-normal md:text-2xl md:leading-relaxed">
              {project.thumbnail.subtitle}
            </p>
            <h3 className="text-heading-alt text-3xl md:text-5xl">
              {project.thumbnail.title}
            </h3>
          </div>
        </div>
      </div>
      <PageContainer>
        <Intro
          image={
            <Image
              src={project.intro.image.src}
              alt={project.intro.image.alt}
              className="hidden h-[375px] lg:block"
              height={375}
            />
          }
          title={project.intro.title}
          description={project.intro.description}
          button={
            <ButtonLink
              intent="primary"
              href={project.intro.button.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.intro.button.icon}
              {project.intro.button.label}
            </ButtonLink>
          }
        />
        <Highlights project={project} />
        <Contact />
      </PageContainer>
    </>
  );
}
