import {
  dp2,
} from 'react-uniform/lib/elevations';
import {
  button,
} from 'react-uniform/lib/typography';

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
  },
};

export default styles;
