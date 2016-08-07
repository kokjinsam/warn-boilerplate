const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  main: {
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  padForAppbar: {
    paddingTop: '5.6rem',
  },
  padForSecondaryBar: {
    paddingTop: '11.2rem', // appbar + secondarybar
  },
  transitionWrapper: {
    position: 'relative',
  },
  '@media screen and (min-width: 800px)': {
    padForAppbar: {
      paddingTop: '6.4rem !important',
    },
    padForSecondaryBar: {
      paddingTop: '12.8rem !important',
    },
  },
};

export default styles;
