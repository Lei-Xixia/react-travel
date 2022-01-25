import { Middleware } from "redux";

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log("state前", store.getState());
  console.log("action", action);
  next(action);
  console.log("state后", store.getState());
};
