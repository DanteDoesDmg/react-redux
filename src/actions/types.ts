export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

export interface PostAction{
    type:typeof FETCH_POSTS|typeof NEW_POST
    payload: any
}

