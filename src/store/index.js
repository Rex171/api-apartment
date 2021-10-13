import {combineReducers} from 'redux';
import isLike from "./reducers/isLikeReducer";
import getEntities from './reducers/getEntitiesReducer';

export default combineReducers({
    isLike,
    getEntities
})