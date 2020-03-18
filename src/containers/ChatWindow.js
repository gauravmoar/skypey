import React from "react";
import "./ChatWindow.css";
import Header from "../components/Header";
import store from "../store";
import Chats from "../components/Chats";
import _ from "lodash";
import MessageInput from "./MessageInput";

export default function ChatWindow({ activeUserId }) {
  const user = store.getState().contacts[activeUserId];
  const activeMsgs = store.getState().messages[activeUserId];
  let value = store.getState().typing;
  return (
    <div className="ChatWindow">
      <Header user={user} />
      <Chats activeMsgs={_.values(activeMsgs)} />
      <MessageInput value={value} activeUserId={activeUserId} />
    </div>
  );
}
