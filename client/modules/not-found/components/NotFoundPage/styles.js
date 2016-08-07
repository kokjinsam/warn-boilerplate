import {
  display3,
  title,
} from '../../../../configs/typography';
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
} from '../../../../configs/constants';

const styles = {
  container: {
    display: 'block',
    height: '100%',
  },
  wrapper: {
    paddingTop: '40%',
    maxWidth: '350px',
    margin: '0 auto',
  },
  huge404: {
    ...display3(),
    textAlign: 'center',
    paddingBottom: '0.8rem',
    color: COLOR_TEXT_PRIMARY,
  },
  desc: {
    ...title(),
    textAlign: 'center',
    color: COLOR_TEXT_SECONDARY,
  },
};

export default styles;
