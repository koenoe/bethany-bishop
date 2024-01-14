import { cx } from 'class-variance-authority';
import { forwardRef } from 'react';

// Note: credits to https://github.com/picturepan2/devices.css
import styles from './IPhone14Pro.module.css';

export default forwardRef<
  HTMLDivElement,
  Readonly<{
    children: React.ReactNode;
    className?: string;
  }>
>(function IPhone14Pro({ children, className }, ref) {
  return (
    <div className={cx(styles['device-iphone-14-pro'], className)} ref={ref}>
      <div className={styles['device-frame']}>
        <div className={styles['device-screen']}>{children}</div>
      </div>
      <div className={styles['device-stripe']}></div>
      <div className={styles['device-btns']}></div>
      <div className={styles['device-power']}></div>
      <div className={styles['device-home']}></div>
    </div>
  );
});
