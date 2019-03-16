// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { createPost, fetchPosts } from './workers';

// call worker saga 
function* watcherCreatePost () { 
    yield takeEvery(types.CREATE_POST_ASYNC, createPost); //  for Eache types will call worker createPost 
}

// add
function* watchFillPosts () {
    yield takeEvery(types.FETCH_POST_ASYNC, fetchPosts);
}

// 
export function* watchPost () {
    yield all([
        call(watcherCreatePost),
        call(watchFillPosts),
    ]);
}

// takeEvery  -  for Eache types will call worker createPost 
// all - ([ Array ])   - Array - this calls onater watcher saga 
// call - calling function  - all([ watcherCreatePost()])  ->  all([  call(watcherCreatePost)])
