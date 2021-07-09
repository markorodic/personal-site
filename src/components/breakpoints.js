export const mobileBreakpoint = 500;
export const tabletBreakpoint = 750;
const laptopBreakpoint = 1215;
const desktopBreakpoint = 1407;

const breakpoints = {
  mobile: `@media (max-width: ${mobileBreakpoint}px)`,
  tablet: `@media (min-width: ${mobileBreakpoint}px) and (max-width: ${tabletBreakpoint}px)`,
  tabletOrSmaller: `@media (max-width: ${tabletBreakpoint}px)`,
  laptop: `@media (min-width: ${tabletBreakpoint}px) and (max-width: ${laptopBreakpoint}px)`,
  desktop: `@media (min-width: ${laptopBreakpoint}px) and (max-width: ${desktopBreakpoint}px)`,
};

export default breakpoints;
