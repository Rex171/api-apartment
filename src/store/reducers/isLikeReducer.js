import {LIKE_ON, LIKE_OFF} from "../actions/isLike";

const initialState = {id: null, active: false};

const isLikeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_OFF: {
            return {active: false, id: action.payload};
        }
        case LIKE_ON: {
            return {active: true, id: action.payload};
        }
        default: {
            return state;
        }
    }
}

export default isLikeReducer;