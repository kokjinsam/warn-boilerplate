import React, { Component } from 'react';
import styles from './styles';
import useSheet from 'react-jss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const classes = this.props.sheet.classes;

    return (
      <div>
        <h2 className={classes.title}>Counter pop: {this.state.counter}</h2>
        <If condition={true}><span>jsx control yea</span></If>
      </div>
   );
  }
}

export default useSheet(Counter, styles);
