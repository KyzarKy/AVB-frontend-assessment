import { createSlice, createSelector } from "@reduxjs/toolkit";
import { mockComments } from "store/api";

export const name = "comments";
const initialState = {
  comments: mockComments,
  commenters: mockComments.reduce((commentersToNow, comment) => {
    let name = comment.name;
    return { ...commentersToNow, [name]: commentersToNow[name] + 1 || 1 };
  }, {}),
};

const commentsSlice = createSlice({
  name,
  initialState,
  reducers: {
    addComment(state, action) {
      let commenter = state.commenters[action.payload.name];
      state.comments.push({ ...action.payload, id: state.comments.length }); // this is not a good key, all keys should be unique, but the dummy data doesn't have real IDs either
      state.commenters[action.payload.name] =
        typeof commenter !== "undefined" ? commenter + 1 : 1;
    },
  },
});

const getSlice = (state) => state[name] || {};

export const getComments = createSelector(getSlice, (slice) => slice.comments);

export const getCommenters = createSelector(
  getSlice,
  (slice) => slice.commenters
);

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
