// Core
import { put, apply } from 'redux-saga/effects';
// Indtruments
import { api } from '../../../../REST';
import { postActions } from '../../actions';
import { uiAtions } from '../../../ui/actions'; 

export function* createPost ({ payload: comment }) {
    // yield console.log('<------ Create Post Saga', action);

    try {
        yield put(uiAtions.startFetching());

        const response =  yield apply(api, api.posts.create, [comment]);
        const { data: post, message } =    yield apply(response, response.json); //  data:post, We change name to -> post

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postActions.createPost(post)); // response.data - post
    } catch (error) {
        yield put(uiAtions.emitError(error, 'Create Post Worker'))

    } finally {
        yield put(uiAtions.stopFetching());
    }
}



//  We can't use async await, just " try chatch "

// put   =  store.dispatch 
// aplay = call - calling  async fun 

