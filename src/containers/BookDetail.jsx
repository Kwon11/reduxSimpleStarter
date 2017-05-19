import React, {Component} from 'react';
import {connect} from 'react-redux';
import {unSelectBook} from '../actions/index.js'
import {bindActionCreators} from 'redux';

class BookDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render () {
    if (!this.props.book) {
      return <div> select a book! </div>;
    }
    return (
      <div onClick={() => this.props.unSelectBook()}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    unSelectBook: function () {
      console.log('i can still do this!')
      return {
        type: 'BOOK_SELECTED',
        payload: {
          title: 'yeaaa',
          pages: 45
        }
      }
    }
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
