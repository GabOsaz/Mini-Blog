import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetching');
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(fetchedStuff => dispatch({
                type: FETCH_POSTS,
                payload: fetchedStuff
            })) 
}

export const createPost =(newData) => dispatch => {
    console.log('newData fetched')
    fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
}

