import {
  dp2,
} from '../../configs/elevations';
import {
  button,
} from '../../configs/typography';
import {
  COLOR_TEXT_PRIMARY,
} from '../../configs/constants';

const styles = {
  button: {
    outline: 'none',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.2rem',
    zIndex: 1,
    textAlign: 'center',
  },
  innerBtn: {
    display: 'flex',
    padding: '1.1rem 1.6rem',
  },
  raisedBtn: {
    ...dp2(),
  },
  icon: {

  },
  text: {
    ...button(),
    color: COLOR_TEXT_PRIMARY,
  },
};

export default styles;
