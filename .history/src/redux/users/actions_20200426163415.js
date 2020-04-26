import types from './types';

export const getUser = (post)=>({
    type:  types.ADD_POST,
    payload: post
})