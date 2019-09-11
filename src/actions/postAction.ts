import { FETCH_POSTS, NEW_POST } from "./types";
import { Dispatch } from "redux";

export const fetchPosts = function() {
  return function(dispatch: Dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };
};
export const createPost = (postData: any) => (dispatch: Dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export type Action = ReturnType<typeof fetchPosts>;
