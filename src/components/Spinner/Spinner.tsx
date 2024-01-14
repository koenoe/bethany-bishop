import { cx } from 'class-variance-authority';

import styles from './Spinner.module.css';

type Props = React.AllHTMLAttributes<HTMLDivElement>;

export default function Spinner({ className, ...props }: Props) {
  return (
    <div className={cx(styles.spinner, className)} {...props}>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
      <div className={styles['spinner-blade']}></div>
    </div>
  );
}
