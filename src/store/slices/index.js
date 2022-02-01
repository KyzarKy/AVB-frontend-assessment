import { combineReducers } from "@reduxjs/toolkit";

import viewReducer, { name as viewName } from "store/slices/view";
import commentsReducer, { name as commentsName } from "store/slices/comments";
import commentToPostReducer, {
  name as commentToPostName,
} from "store/slices/commentToPost";

const rootReducer = combineReducers({
  [viewName]: viewReducer,
  [commentsName]: commentsReducer,
  [commentToPostName]: commentToPostReducer,
});

export default rootReducer;
