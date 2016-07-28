import React, { Component, PropTypes } from 'react';
import omit from 'lodash.omit';
import cx from 'classnames';
import styles from './styles';
import useSheet from 'react-jss';

function createButton(text, Icon, options = {}) {
  const {
    isRaised = false,
  } = options;

  const defaultLabelColor = isRaised ? '#ffffff' : '#555555';
  const defaultBackgroundColor = isRaised ? 'orange' : 'transparent';

  class Button extends Component {
    static propTypes = {
      linkButton: PropTypes.bool.isRequired,
      href: PropTypes.string,
      style: PropTypes.object,
      label: PropTypes.string.isRequired,
      labelColor: PropTypes.string,
      labelStyle: PropTypes.object,
      backgroundColor: PropTypes.string,
      iconStyle: PropTypes.object,
      iconColor: PropTypes.string,
      iconSize: PropTypes.number,
      raised: PropTypes.bool,
      sheet: PropTypes.any.isRequired,
    };

    static defaultProps = {
      linkButton: false,
      raised: isRaised,
      label: text,
      labelColor: defaultLabelColor,
      backgroundColor: defaultBackgroundColor,
    };

    componentDidMount() {
      const Waves = require('node-waves');
      Waves.attach(this.refs.button);
      Waves.init();
    }

    renderBtnContent = () => {
      const {
        label,
        // labelColor,
        // labelStyle,
        iconColor,
        iconSize,
        iconStyle,
        sheet,
      } = this.props;

      const { classes } = sheet;

      // labelStyle,
      // labelColor && { color: labelColor },
      // missing these two
      const computedTextStyle = cx({
        [classes.text]: true,
      });

      return (
        <div className={classes.innerBtn}>
          <If condition={Icon}>
            <div className={classes.icon}>
              <Icon
                size={iconSize}
                color={iconColor}
                style={iconStyle}
              />
            </div>
          </If>
          <If condition={text}>
            <span className={computedTextStyle}>{label}</span>
          </If>
        </div>
      );
    }

    render() {
      const {
        linkButton,
        // backgroundColor,
        // style,
        raised,
        sheet,
        ...others,
      } = this.props;

      const cleanProps = omit(others, [
        'label',
        'labelColor',
        'labelStyle',
        'iconColor',
        'iconSize',
        'iconStyle',
        'raised',
        'linkButton',
        'buttonStyle',
        'backgroundColor',
      ]);

      const { classes } = sheet;

      // style,
      // backgroundColor && { backgroundColor },
      const btnStyle = cx({
        [classes.button]: true,
        [classes.raisedBtn]: raised,
      });

      const elem = linkButton ? 'a' : 'button';
      const elemProps = {
        ref: 'button',
        className: btnStyle,
        ...cleanProps,
      };

      return React.createElement(elem, elemProps, this.renderBtnContent());
    }
  }

  return useSheet(Button, styles);
}

export default createButton;
