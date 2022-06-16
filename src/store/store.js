import {createStore} from 'redux';
import reducers from '../reducers/indexReducer';

const store = createStore(reducers);
export default store;