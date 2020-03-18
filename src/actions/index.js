import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE
} from "../constants/action-types";

export const setActiveUserId = id => {
  return {
    type: SET_ACTIVE_USER_ID,
    payload: id
  };
};

export const setTypingValue = text => {
  return {
    type: SET_TYPING_VALUE,
    payload: text
  };
};
export const sendMessage = (value, userId) => {
  return {
    type: SEND_MESSAGE,
    payload: {
      value,
      userId
    }
  };
};
