// DEFAULT STATE
const initialState = {
  loading: false,
  items: [],
}


// ACTION TYPES
const REQUEST_ITEMS = 'REQUEST_ITEMS'
const RECEIVED_ITEMS = 'RECEIVED_ITEMS'


// REDUCER
export default function reducer(state = initialState, { type, payload, meta }) {
  switch (type) {
    case REQUEST_ITEMS:
      return {
        ...state,
        loading: true,
      }

    case RECEIVED_ITEMS:
      return {
        ...state,
        loading: false,
        items: payload.items,
      }

    default:
      return state
  }
}


// ACTIONS
export function getItems(itemType) {
  return (dispatch, getState) => {
    dispatch({
      type: REQUEST_ITEMS,
    })
    // simulate an API call...
    const requestDuration = (itemType === 'fruits' ? 5000 : 200)
    setTimeout(() => {
      if (itemType === 'fruits') {
        dispatch({
          type: RECEIVED_ITEMS,
          payload: {
            items: [
              { type: 'Fruits', name: 'Oranges', stock: 34, desc: 'meh' },
              { type: 'Fruits', name: 'Bananas', stock: 43, desc: 'foo' },
            ],
          },
        })
      } else if (itemType === 'vegetables') {
        dispatch({
          type: RECEIVED_ITEMS,
          payload: {
            items: [
              { type: 'Vegetables', name: 'Potatoes', stock: 57, desc: 'meh' },
              { type: 'Vegetables', name: 'Carrots', stock: 123, desc: 'foo' },
              { type: 'Vegetables', name: 'Peppers', stock: 12, desc: 'foo' },
            ],
          },
        })
      }
    }, requestDuration)
  }
}
