import {GET_ENTITIES} from '../actions/getEntities'

const initialState = null;

const getEntitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ENTITIES: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default getEntitiesReducer;