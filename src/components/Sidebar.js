import React from "react";
import "./Sidebar.css";
import User from "../containers/User";

export default function Sidebar({ contacts }) {
  return (
    <aside className="sidebar">
      {contacts.map(contact => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
}
