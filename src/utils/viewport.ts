import { RefObject } from 'react';

// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
export const stretchViewPortHeight = (elem = document.documentElement) => {
  const viewportHeight = window.innerHeight * 0.01;
  elem.style.setProperty('--vh', viewportHeight + 'px');
};

export const elemInView = (
  elem: RefObject<HTMLElement>,
  fullyVisible = false
): boolean => {
  if (!elem.current) return false;
  const position = elem.current.getBoundingClientRect();
  const elemTop = position.top;
  const elemBottom = position.bottom;
  const isVisible = fullyVisible
    ? elemTop >= 0 && elemBottom <= window.innerHeight
    : elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
};
