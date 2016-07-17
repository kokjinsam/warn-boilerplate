import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Footer from '../Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';

const propTypes = {

};

const SecondPage = () => {
  return (
    <div>
      SecondPage component
      <Link to="/">Home</Link>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

SecondPage.propTypes = propTypes;

export default SecondPage;
