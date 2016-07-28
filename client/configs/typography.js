import {
  PREFERREED_FONT,
} from './constants';

function preferredFont(usePreferred = true) {
  if (usePreferred) {
    return {
      fontFamily: PREFERREED_FONT,
    };
  }

  return {};
}

function display4(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '11.2rem',
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: '-0.04em',
    opacity: contrast ? 0.54 : 1,
  };
}

function display3(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '5.6rem',
    fontWeight: 400,
    lineHeight: '1.35',
    letterSpacing: '-0.02em',
    opacity: contrast ? 0.54 : 1,
  };
}

function display2(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '4.5rem',
    fontWeight: 400,
    lineHeight: '4.8rem',
    opacity: contrast ? 0.54 : 1,
  };
}

function display1(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '3.4rem',
    fontWeight: 400,
    lineHeight: '4rem',
    opacity: contrast ? 0.54 : 1,
  };
}

function headline(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '2.4rem',
    fontWeight: 400,
    lineHeight: '3.2rem',
    MozOsxFontSmoothing: 'grayscale',
    opacity: contrast ? 0.87 : 1,
  };
}

function title(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '2rem',
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '0.02em',
    opacity: contrast ? 0.87 : 1,
  };
}

function subhead(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: '2.4rem',
    letterSpacing: '0.04em',
    opacity: contrast ? 0.87 : 1,
  };
}

function subhead2(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: '2.8rem',
    letterSpacing: '0.04em',
    opacity: contrast ? 0.87 : 1,
  };
}

function body2(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.4rem',
    fontWeight: usePreferred ? 500 : 'bold',
    lineHeight: '2rem',
    letterSpacing: 0,
    opacity: contrast ? 0.87 : 1,
  };
}

function body1(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: '2rem',
    letterSpacing: 0,
    opacity: contrast ? 0.87 : 1,
  };
}

function caption(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.2rem',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: 0,
    opacity: contrast ? 0.54 : 1,
  };
}

function menu(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: 0,
    opacity: contrast ? 0.87 : 1,
  };
}

function button(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: 1,
    textTransform: 'uppercase',
    letterSpacing: 0,
    opacity: contrast ? 0.87 : 1,
  };
}

export {
  display4,
  display3,
  display2,
  display1,
  headline,
  title,
  subhead,
  subhead2,
  body2,
  body1,
  caption,
  menu,
  button,
};
