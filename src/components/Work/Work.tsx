import { PROJECTS } from '@/data';
import WorkThumbnail from './WorkThumbnail';

import styles from './styles.module.css';

export default function Work() {
  return (
    <>
      <div id="work" className="-mt-10 md:-mt-20" />
      <div className={styles.content}>
        <div className={styles.gallery}>
          <div className={styles.wrapper}>
            {PROJECTS.map((project) => (
              <WorkThumbnail
                key={project.slug}
                className={styles.item}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
