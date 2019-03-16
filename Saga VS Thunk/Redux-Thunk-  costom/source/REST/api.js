// Instruments
import { MAIN_URL, groupId } from './config';

export const api = {
    posts : {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'GET',
                headers: {
                    'x-no-auth': groupId,
                },
            });
        },
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method:  'POST',
                headers: {
                    'x-no-auth':    groupId,
                    'Content-Type': 'application/json', // comment to json
                },
                body: JSON.stringify({ comment }),
            });
        },
        // remove (postId) {
        //     return fetch(`${MAIN_URL}/feed/${postId}`, {
        //         method:  'DELETE',
        //         headers: {
        //             Authorization: this.token,
        //         },
        //     });
        // },
    }
}