import env from 'exenv';

/**
 * helper function that detects scrollbar width by adding
 * an element and subtracting its clientWidth from its offsetWidth
 * @returns {(number|null)} returns calculated scrollbar width
 */
export const detectScrollbarWidth = () => {
  if (!env.canUseDOM) return null;

  const { body } = document;
  const scrollbarDetector = document.createElement('div');
  const scrollbarDetectorClass = 'scrollbar-width-detector';

  scrollbarDetector.className = scrollbarDetectorClass;
  scrollbarDetector.setAttribute(
    'style',
    'position: absolute; top: -9999px; width: 100px; height: 100px; overflow: scroll;',
  );

  // add scrollbar detector element to body
  body.appendChild(scrollbarDetector);

  // calculate scrollbar width
  const scrollbarWidth = scrollbarDetector.offsetWidth - scrollbarDetector.clientWidth;

  // remove scrollbar detector element from body
  body.removeChild(scrollbarDetector);

  return scrollbarWidth;
};

/**
 * function to handle body behavior with hidden scrollbars
 * on overflow:hidden to prevent content width resizing
 * @param {bool} hasScrollbar
 */
export const setBodyHasScrollbarBehavior = hasScrollbar => {
  if (!env.canUseDOM) return;

  const html = document.querySelector('html');
  const { body } = document;

  // if scrollbars are hidden, reduce body width to prevent resizing
  // set html background to body background to prevent mismatching colors
  if (!hasScrollbar) {
    const backgroundColor = window.getComputedStyle(body).getPropertyValue('background-color');
    const scrollbarWidth = detectScrollbarWidth();

    html.style.background = backgroundColor;
    body.style.width = `calc(100% - ${scrollbarWidth}px)`;
  } else {
    // reset styles if scrollbars are visible
    html.style.background = null;
    body.style.width = null;
  }
};
