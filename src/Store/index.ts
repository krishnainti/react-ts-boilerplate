import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./userSlice";
import loaderReducer from "./loaderSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    loader: loaderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
