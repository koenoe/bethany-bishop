import { type RefObject, useEffect, useCallback } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  callback: (inView: boolean) => void;
}

const useInView = (
  ref: RefObject<Element>,
  { callback, ...options }: UseInViewOptions,
) => {
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting);
      });
    },
    [callback],
  );

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const observer = new IntersectionObserver(handleIntersection, options);

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref, options, handleIntersection]);
};

export default useInView;
