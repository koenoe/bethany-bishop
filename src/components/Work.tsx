import { HOME_PAGE, PROJECTS } from '@/data';
import WorkThumbnail from './WorkThumbnail';

export default function Work() {
  return (
    <div
      id="work"
      className="mb-4 flex flex-row gap-4 overflow-hidden overflow-x-scroll px-10 scrollbar-hide md:gap-8 md:px-20 lg:py-20"
    >
      {PROJECTS.map((project) => (
        <WorkThumbnail key={project.slug} className="min-w-full" {...project} />
      ))}
    </div>
  );
}
