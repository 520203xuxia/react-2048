import {
  SEND_RED_BAG
} from '../action/send_action';

const initialState = {
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