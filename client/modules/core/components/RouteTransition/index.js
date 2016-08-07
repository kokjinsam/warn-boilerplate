import React, { PropTypes } from 'react';
import { TransitionMotion } from 'react-motion';
import {
  FADE,
  POP,
  SLIDELEFT,
  SLIDEUP,
} from './constants';
import {
  fade,
  pop,
  slideLeft,
  slideUp,
} from './presets';

const willEnter = (transition) => {
  switch (transition) {
    case FADE:
      return fade.willEnter;
    case POP:
      return pop.willEnter;
    case SLIDELEFT:
      return slideLeft.willEnter;
    case SLIDEUP:
      return slideUp.willEnter;
    default:
      return fade.willEnter;
  }
};

const willLeave = (transition) => {
  switch (transition) {
    case FADE:
      return fade.willLeave;
    case POP:
      return pop.willLeave;
    case SLIDELEFT:
      return slideLeft.willLeave;
    case SLIDEUP:
      return slideUp.willLeave;
    default:
      return fade.willLeave;
  }
};

const getDefaultStyles = (transition) => {
  switch (transition) {
    case FADE:
      return fade.getDefaultStyles;
    case POP:
      return pop.getDefaultStyles;
    case SLIDELEFT:
      return slideLeft.getDefaultStyles;
    case SLIDEUP:
      return slideUp.getDefaultStyles;
    default:
      return fade.getDefaultStyles;
  }
};

const getStyles = (transition) => {
  switch (transition) {
    case FADE:
      return fade.getStyles;
    case POP:
      return pop.getStyles;
    case SLIDELEFT:
      return slideLeft.getStyles;
    case SLIDEUP:
      return slideUp.getStyles;
    default:
      return fade.getStyles;
  }
};

const mapStyles = (transition, styles) => {
  switch (transition) {
    case FADE:
      return fade.mapStyles(styles);
    case POP:
      return pop.mapStyles(styles);
    case SLIDELEFT:
      return slideLeft.mapStyles(styles);
    case SLIDEUP:
      return slideUp.mapStyles(styles);
    default:
      return fade.mapStyles(styles);
  }
};

const styles = {
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
};

const propTypes = {
  children: PropTypes.any.isRequired,
  pathname: PropTypes.any.isRequired,
  transition: PropTypes.oneOf([
    FADE,
    POP,
    SLIDELEFT,
    SLIDEUP,
  ]).isRequired,
};

const RouteTransition = ({
  children: child,
  pathname,
  transition,
}) => (
  <TransitionMotion
    defaultStyles={[{
      key: pathname,
      style: getDefaultStyles(transition),
      data: { child },
    }]}
    styles={[{
      key: pathname,
      style: getStyles(transition),
      data: { child },
    }]}
    willEnter={willEnter(transition)}
    willLeave={willLeave(transition)}
  >
    {
      (interpolated) => (
        <div
          style={{
            position: 'relative',
            height: '100%',
          }}
        >
          {interpolated.map(({ key, style, data }) =>
            <div
              key={`${key}-transition`}
              style={{
                ...styles.wrapper,
                ...mapStyles(transition, style),
              }}
            >
              {data.child}
            </div>
          )}
        </div>
      )
    }
  </TransitionMotion>
);

RouteTransition.propTypes = propTypes;

export default RouteTransition;
