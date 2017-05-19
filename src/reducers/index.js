import { combineReducers } from 'redux';
import BooksReducer from './booksReducer.js';
import ActiveBook from './activeBookReducer.js';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
