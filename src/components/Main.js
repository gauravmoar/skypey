import React from "react";
import "./Main.css";
import Empty from "./Empty";
import ChatWindow from "../containers/ChatWindow";

export default function Main({ user, activeUserId }) {
  const renderMainContent = () => {
    if (activeUserId) {
      return <ChatWindow activeUserId={activeUserId} />;
    } else {
      return <Empty user={user} activeUserId={activeUserId} />;
    }
  };
  return <main className="main">{renderMainContent()}</main>;
}
