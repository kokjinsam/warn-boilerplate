import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import useSheet from 'react-jss';

import styles from './styles';

function createIconButton(Icon) {
  const propTypes = {
    style: PropTypes.object,
    iconStyle: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.number,
    sheet: PropTypes.any.isRequired,
  };

  class IconButton extends Component {
    componentDidMount() {
      const Waves = require('node-waves');
      Waves.attach(this.refs.button);
      Waves.init();
    }

    render() {
      const {
        // style,
        color,
        size,
        iconStyle,
        sheet,
        ...others,
      } = this.props;

      const { classes } = sheet;

      // missing style
      const btnStyle = cx({
        [classes.button]: true,
      });

      return (
        <button
          ref="button"
          className={btnStyle}
          {...others}
        >
          <Icon
            size={size}
            color={color}
            style={iconStyle}
          />
        </button>
      );
    }
  }

  IconButton.propTypes = propTypes;
  return useSheet(IconButton, styles);
}

export default createIconButton;
