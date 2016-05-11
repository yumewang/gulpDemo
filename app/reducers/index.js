import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { rootReducer } from './root-reducer';
import { user } from './user';
import { messages } from './messages';


export default combineReducers({
    rootReducer,
    user,
    messages,
    route: routeReducer
});
