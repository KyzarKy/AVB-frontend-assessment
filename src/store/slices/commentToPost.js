import { createSlice, createSelector } from "@reduxjs/toolkit";

export const name = "commentToPost";
const initialState = {
  name: "Ky Merritt",
  comment: "",
};

const commentToPostSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateName(state, action) {
      // I'm not enforcing any name rules
      // you can, for instance, use all lower-case.
      // If we didn't want the avatars to have possible mixed-case
      // we could toUppercase in the getAvatarFromName helper
      // or enforce name rules here, or preferably on the server side
      // with real user data
      state.name = action.payload;
    },
    updateComment(state, action) {
      state.comment = action.payload;
    },
  },
});

const getSlice = (state) => state[name] || {};

export const getComment = createSelector(getSlice, (slice) => slice.comment);

export const getName = createSelector(getSlice, (slice) => slice.name);

export const { updateName, updateComment } = commentToPostSlice.actions;
export default commentToPostSlice.reducer;
