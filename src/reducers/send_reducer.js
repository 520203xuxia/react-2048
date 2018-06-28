import {
  SEND_RED_BAG
} from '../action/send_action';

const initialState = {
  // cart: [{
  //   product: 'bread 700g',
  //   quantity: 2,
  //   unitCost: 90
  // }, {
  //   product: 'milk 500ml',
  //   quantity: 1,
  //   unitCost: 47
  // }]
  bag: [{
    person: '0',
    amount: '0',
  }]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_RED_BAG:
      {
        return {
          ...state,
          bag: [action.payload]
        }
      }

    default:
      return state;
  }
}