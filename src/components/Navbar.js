import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link className="text-white text-decoration-none" to="#">
          {" "}
          Home
        </Link>
        <Link to="/" className="text-white ml-4 text-decoration-none">
          All User
        </Link>
        <Link to="/adduser" className="text-white ml-4 text-decoration-none">
          {" "}
          Add User
        </Link>
      </Toolbar>
    </AppBar>
  );
}
