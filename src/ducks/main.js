// DEFAULT STATE
const initialState = {
  items: [],
}


// ACTION TYPES
const GET_ITEM = 'GET_ITEM'


// REDUCER
export default function reducer(state = initialState, { type, payload, meta }) {
  switch (type) {
    default:
      return state
  }
}


// ACTIONS
export function wipeDatabag() {
  return (dispatch, getState) => {
    dispatch({
      type: GET_ITEM,
    })
  }
}
