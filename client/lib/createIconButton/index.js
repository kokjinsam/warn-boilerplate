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
    className: PropTypes.string,
  };

  class IconButton extends Component {
    componentDidMount() {
      const Waves = require('node-waves');
      Waves.attach(this.refs.button);
      Waves.init();
    }

    render() {
      const {
        color,
        size,
        iconStyle,
        sheet,
        className,
        ...others,
      } = this.props;

      const { classes } = sheet;

      const btnStyle = cx({
        [className]: className,
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
