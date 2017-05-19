export default function (state = null, action) {
  switch(action.type) { //when we care
    case 'BOOK_SELECTED':
      return action.payload;
  }
  //handle the case where we don't care about current action
  return state;
}
