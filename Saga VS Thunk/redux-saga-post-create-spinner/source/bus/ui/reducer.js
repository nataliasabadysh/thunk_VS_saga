// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    isFetching: false,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.types) {
        case types.START_FETCHING:
            return state.set('isFetching', true);

        case types.STOP_FETCHING:
            return state.set('isFetching', false);

        default:
            return state;
    }
};



// Map - obj imutable 
//- state.set('isFetching', false);
// to get this value of 'isFetching' We will cal in Components as state.ui.get ('isFetching'  ->  get.('isFetching')