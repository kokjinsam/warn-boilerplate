import React, { Component, PropTypes } from 'react';
import styles from './styles';
import useSheet from 'react-jss';

class Counter extends Component {
  static propTypes = {
    sheet: PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const classes = this.props.sheet.classes;

    return (
      <div>
        <h2 className={classes.title}>Counter pop: {this.state.counter}</h2>
      </div>
   );
  }
}

export default useSheet(Counter, styles);
