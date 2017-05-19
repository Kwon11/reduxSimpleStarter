import React, {Component} from 'react';
import {connect} from 'react-redux';


class BookDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.book)
  }
  render () {
    if (!this.props.book) {
      return <div> select a book! </div>;
    }
    return (
      <div>
        <h3> Details for </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }

}

function mapStateToProps(state) {//connects app state to props here
  return {
    book: state.activeBook
  }; //now we can access this.props.book
}

export default connect(mapStateToProps)(BookDetail);
