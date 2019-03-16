// Core 
import { fromJS, List } from 'immutable';

// Instruments
import { types } from './types';


const initialState = List();

export const postsReducer = (state = initialState, {type, payload }) =>{
    switch(type){

        case types.FILL_POST: 
            return fromJS(payload);

        case types.CREATE_POST :
            return state.unshift(fromJS(payload));

        // case types.REMOVE_POST:
        //     return state.filter((post) => post.get('id') !== action.payload);


        default:
            return state;
    }
}