import { useSyncExternalStore } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);
const breakpoints = fullConfig.theme.screens;

type BreakpointKey = keyof typeof breakpoints;

const getMediaQuery = (breakpoint: BreakpointKey) => {
  return window.matchMedia(`(min-width: ${breakpoints[breakpoint]})`);
};

export default function useBreakpoint(breakpoint: BreakpointKey) {
  const getServerSnapshot = () => {
    return false;
  };

  const getSnapshot = () => {
    return getMediaQuery(breakpoint).matches;
  };

  const subscribe = (callback: () => void) => {
    if (typeof window === 'undefined') {
      return () => {};
    }

    const mediaQuery = getMediaQuery(breakpoint);

    mediaQuery.addEventListener('change', callback);

    return () => {
      mediaQuery.removeEventListener('change', callback);
    };
  };

  const matches = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return matches;
}
