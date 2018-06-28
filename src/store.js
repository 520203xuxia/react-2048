import {
	createStore
} from "redux";
import send_reducer from './reducers/send_reducer';

let store = createStore(send_reducer);

export default store;