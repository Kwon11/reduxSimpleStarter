function selectBook (book) {
  //selectBook is an ActionCreator, it needs to return an Action
  //action is an object with a type property, and a payload
  //type describes purpose of the action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

export default selectBook;
