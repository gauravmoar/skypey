import React from "react";
import "./Header.css";

export default function Header({ user }) {
  return (
    <header className="Header">
      <h1 className="Header__name">{user.name}</h1>
      <p className="Header_status">{user.status}</p>
    </header>
  );
}
