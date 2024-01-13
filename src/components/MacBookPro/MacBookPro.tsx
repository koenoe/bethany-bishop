import { cx } from 'class-variance-authority';

// Note: credits to https://codepen.io/devindavid/pen/poeaxEb
import './MacBookPro.css';

export default function MacBookPro({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={cx('mbp-mockup-wrapper', className)}>
      <div className="mbp-container">
        <div className="mbp-display with-glare">
          <div className="display-edge">
            <div className="bezel">
              <div className="display-camera"></div>
              <div className="display-frame">{children}</div>
              <div className="below-display"></div>
            </div>
          </div>
        </div>
        <div className="mbp-keyboard">
          <div className="front">
            <div className="opener-left"></div>
            <div className="opener-right"></div>
          </div>
          <div className="bottom-left"></div>
          <div className="bottom-right"></div>
          <div className="mbp-shadow">
            <div className="shadow-left"></div>
            <div className="shadow-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
