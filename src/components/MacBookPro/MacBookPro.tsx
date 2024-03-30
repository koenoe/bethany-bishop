import { cx } from 'class-variance-authority';
import { forwardRef } from 'react';

// Note: credits to https://codepen.io/devindavid/pen/poeaxEb
import styles from './MacBookPro.module.css';

export default forwardRef<
  HTMLDivElement,
  Readonly<{
    children: React.ReactNode;
    className?: string;
    id?: string;
  }>
>(function MacBookPro({ children, className, id }, ref) {
  return (
    <div
      className={cx(styles['mbp-mockup-wrapper'], className)}
      ref={ref}
      id={id}
    >
      <div className={styles['mbp-container']}>
        <div className={styles['mbp-display']}>
          <div className={styles['display-edge']}>
            <div className={styles['bezel']}>
              <div className={styles['display-camera']}></div>
              <div className={styles['display-frame']}>{children}</div>
              <div className={styles['below-display']}></div>
            </div>
          </div>
        </div>
        <div className={styles['mbp-keyboard']}>
          <div className={styles['front']}>
            <div className={styles['opener-left']}></div>
            <div className={styles['opener-right']}></div>
          </div>
          <div className={styles['bottom-left']}></div>
          <div className={styles['bottom-right']}></div>
          <div className={styles['mbp-shadow']}>
            <div className={styles['shadow-left']}></div>
            <div className={styles['shadow-right']}></div>
          </div>
        </div>
      </div>
    </div>
  );
});
