/* eslint-disable */
import {
  SHADOW_KEY_UMBRA_OPACITY,
  SHADOW_KEY_PENUMBRA_OPACITY,
  SHADOW_AMBIENT_SHADOW_OPACITY,
} from './constants';

const UMBRA_COLOR = `rgba(0, 0, 0, ${SHADOW_KEY_UMBRA_OPACITY})`;
const PENUMBRA_COLOR = `rgba(0, 0, 0, ${SHADOW_KEY_PENUMBRA_OPACITY})`;
const SHADOW_COLOR = `rgba(0, 0, 0, ${SHADOW_AMBIENT_SHADOW_OPACITY})`;

function focus() {
  return {
    boxShadow: '0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36)',
  };
}

function dp1() {
  return {
    boxShadow: `0 1px 3px ${PENUMBRA_COLOR}, 0 1px 2px ${UMBRA_COLOR}`,
  };
}
function dp2() {
  return {
    boxShadow: `0 2px 2px 0 ${PENUMBRA_COLOR}, 0 3px 1px -2px ${UMBRA_COLOR}, 0 1px 5px 0 ${SHADOW_COLOR}`,
  };
}

function dp3() {
  return {
    boxShadow: `0 3px 4px 0 ${PENUMBRA_COLOR}, 0 3px 3px -2px ${UMBRA_COLOR}, 0 1px 8px 0 ${SHADOW_COLOR}`,
  };
}

function dp4() {
  return {
    boxShadow: `0 4px 5px 0 ${PENUMBRA_COLOR}, 0 1px 10px 0 ${UMBRA_COLOR}, 0 2px 4px -1px ${SHADOW_COLOR}`,
  }
}

function dp6() {
  return {
    boxShadow: `0 6px 10px 0 ${PENUMBRA_COLOR}, 0 1px 18px 0 ${UMBRA_COLOR}, 0 3px 5px -1px ${SHADOW_COLOR}`,
  };
}

function dp8() {
  return {
    boxShadow: `0 8px 10px 1px ${PENUMBRA_COLOR}, 0 3px 14px 2px ${UMBRA_COLOR}, 0 5px 5px -3px ${SHADOW_COLOR}`,
  };
}

function dp9() {
  return {
    boxShadow: `0 10px 20px 1px ${PENUMBRA_COLOR}, 0 6px 6px 2px ${UMBRA_COLOR}`,
  };
}

function dp12() {
  return {
    boxShadow: `0 14px 28px 1px ${PENUMBRA_COLOR}, 0 10px 10px 2px ${UMBRA_COLOR}`,
  };
}

function dp16() {
  return {
    boxShadow: `0 16px 24px 2px ${PENUMBRA_COLOR}, 0 6px 30px 5px ${UMBRA_COLOR}, 0 8px 10px -5px ${SHADOW_COLOR}`,
  };
}

function dp24() {
  return {
    boxShadow: `0 19px 38px 2px ${PENUMBRA_COLOR}, 0 15px 12px 5px ${UMBRA_COLOR}`,
  };
}

export {
  focus,
  dp1,
  dp2,
  dp3,
  dp4,
  dp6,
  dp8,
  dp9,
  dp12,
  dp16,
  dp24,
};
