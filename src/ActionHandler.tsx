import type { Action } from "./components/types";

const isAction = (action: Action | string | undefined): action is Action => {
  return typeof action === "object" && action !== null && "type" in action;
};

export { isAction };