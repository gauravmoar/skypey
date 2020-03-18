import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";
import _ from "lodash";

const messages = (state = getMessages(10), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { value, userId } = action.payload;
      const userMsgs = state[userId];
      const number = +_.keys(userMsgs).pop() + 1;

      return {
        ...state,
        [userId]: {
          ...userMsgs,
          [number]: {
            number,
            text: value,
            is_user_msg: true
          }
        }
      };

    default:
      return state;
  }
};
export default messages;
