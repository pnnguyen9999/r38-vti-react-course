import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            if (isActive) {
              return { color: "red", fontWeight: "bold" };
            } else {
              return { color: "black", fontWeight: "normal" };
            }
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          style={({ isActive }) => {
            if (isActive) {
              return { color: "red", fontWeight: "bold" };
            } else {
              return { color: "black", fontWeight: "normal" };
            }
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/product-detail/1?status=available&extraInfo=abcd"
          style={({ isActive }) => {
            if (isActive) {
              return { color: "red", fontWeight: "bold" };
            } else {
              return { color: "black", fontWeight: "normal" };
            }
          }}
        >
          Product detail
        </NavLink>
      </li>
    </ul>
  );
}
