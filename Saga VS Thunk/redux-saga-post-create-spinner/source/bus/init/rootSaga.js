// Core
import { all, call } from 'redux-saga/effects';

// Watcher
import { watchPost } from '../../bus/posts/saga/watcher';

export function* rootSaga () {
    // console.log('Saga  rootSaga Watche ');
    yield all([call(watchPost)]);
}
