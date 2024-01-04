import { HOME_PAGE, PROJECTS } from '@/data';
import Block from './Block';
import WorkThumbnail from './WorkThumbnail';

export default function Work() {
  return (
    <Block intent="secondary">
      <h2 className="mb-6 leading-normal md:mb-8 md:leading-normal">
        {HOME_PAGE.work.title}
      </h2>
      <div className="flex flex-col gap-12 md:flex-row">
        {PROJECTS.map((project) => (
          <WorkThumbnail
            key={project.slug}
            className="block w-full md:w-1/3"
            {...project}
          />
        ))}
      </div>
    </Block>
  );
}
