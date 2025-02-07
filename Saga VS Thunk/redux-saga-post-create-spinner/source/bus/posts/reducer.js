// Core
import { fromJS, List } from 'immutable';

// Instruments
import { types } from './types';

const initialState = List();

export const postReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.FILL_POST :
            return fromJS(action.payload);

        case types.CREATE_POST :
            return state.unshift(fromJS(action.payload));

        default: return state;
    }
};
