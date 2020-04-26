import types from './types';

export const get = (post)=>({
    type:  types.ADD_POST,
    payload: post
})