const initialState = [];

export function reducer(state = initialState, action) {
  if (action.type == "GET_ALL") {
    return action.payload;
  }
  if (action.type == "ADD_NEW") {
    return [...state, action.payload];
  }
  if (action.type == "DELETE_USER") {
    return state.filter((e) => {
      if (e._id == action.payload) {
        return false;
      }
      return true;
    });
  }
  if (action.type == "UPDATE_NEW") {
    return state.map((e) => {
      if (e._id == action.payload._id) {
        return action.payload;
      }
      return e;
    });
  }
  return state;
}
