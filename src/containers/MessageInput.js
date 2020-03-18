import React from "react";
import "./MessageInput.css";
import { setTypingValue, sendMessage } from "../actions";
import store from "../store";

export default function MessageInput({ value, activeUserId }) {
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };
  const handleSubmit = e => {
    e.preventDefault();
    store.dispatch(sendMessage(value, activeUserId));
  };
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message_input"
        value={value}
        onChange={handleChange}
        placeholder="Write a message"
      />
    </form>
  );
}
