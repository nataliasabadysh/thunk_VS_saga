// Types 
import { types } from './types';

// Instruments
import { api } from '../../REST';

export const fillPosts = ( posts ) => ({
    type: types.FILL_POST,
    payload: posts,
});

export const createPost = (post) => ({
    type:    types.CREATE_POST,
    payload: post, //  данные о посте
});

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: types.FETCH_POSTS_ASYNC,
    });
    
    const response = await api.posts.fetch();
    const resolts = await response.json();
    console.log('res', response ); // data , status , ok , 
    console.log('res', resolts );  // obj { Messege, Date} 
    
    dispatch(fillPosts(resolts.data));
};

export const createPostAsync = (comment) => async (dispatch) => {
    dispatch({
        type: types.CREATE_POST_ASYNC,
    });

    const response = await api.posts.create(comment);
    const result = await response.json();

    dispatch(createPost(result.data));
};

// removePost: (postId) => {
//     return {
//         type:    types.REMOVE_POST,
//         payload: postId,
//     };
// },

// removePostAsync: (postId) => {
//     return {
//         type:    types.REMOVE_POST_ASYNC,
//         payload: postId,
//     };
// },