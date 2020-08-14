import { SHOW_ALERTS, HIDE_ALERTS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERTS:
      console.log(action.payload);
      return { alert: action.payload };

    case HIDE_ALERTS:
      return { alert: null };
    default:
      return state;
  }
};
