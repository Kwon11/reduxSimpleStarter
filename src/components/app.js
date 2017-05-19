import React, { Component } from 'react';
import BookList from '../containers/BookList.jsx';
import BookDetail from '../containers/BookDetail.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
