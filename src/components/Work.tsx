import { HOME_PAGE, PROJECTS } from '@/data';
import WorkThumbnail from './WorkThumbnail';

export default function Work() {
  return (
    <div className="scrollbar-hide mb-4 mt-0 flex flex-row gap-4 overflow-hidden overflow-x-scroll px-10 md:my-20 md:gap-8 md:px-20">
      {PROJECTS.map((project) => (
        <WorkThumbnail key={project.slug} className="min-w-full" {...project} />
      ))}
    </div>
  );
}
