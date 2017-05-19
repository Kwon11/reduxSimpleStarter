import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index.js';
import { bindActionCreators } from 'redux'; //the thing that makes actions flow through reducers


class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
          <li
            key={book.title}
            className="list-group-item"
            onClick={()=> this.props.selectBook(book)}
            >
            {book.title}</li>
        )
    });
  }

  render () {
    return (
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      )
  }
}

function mapStateToProps(state) {
  return (
      {
        books: state.books
      }
    )
}

//anything returned in this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({
    selectBook: selectBook //this.props.selectBook is now available as an action creator
  }, dispatch) //dispatch => is the function that we want the action to flow through
} //dispatch takes all the actions and makes sure they get passed to reducers

//promote BookList from component, to container. It needs to know about
//this new dispatch method called selectBook, make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
