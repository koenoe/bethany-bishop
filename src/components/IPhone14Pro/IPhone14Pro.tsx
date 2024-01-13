import { cx } from 'class-variance-authority';

// Note: credits to https://github.com/picturepan2/devices.css
import styles from './IPhone14Pro.module.css';

export default function IPhone14Pro({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={cx(styles['device-iphone-14-pro'], className)}>
      <div className={styles['device-frame']}>
        <div className={styles['device-screen']}>{children}</div>
      </div>
      <div className={styles['device-stripe']}></div>
      <div className={styles['device-btns']}></div>
      <div className={styles['device-power']}></div>
      <div className={styles['device-home']}></div>
    </div>
  );
}
