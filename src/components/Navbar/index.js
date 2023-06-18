import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background-color: #000;
`;
const Tabs = styled(NavLink)`
  font-size: 15px;
  margin-right: 25px;
  color: white;
  text-decoration: none;
`;
function Navbar() {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Arsil Malek</Tabs>
        <Tabs to="/all-users">All Users</Tabs>
        <Tabs to="/add-user">Add User</Tabs>
      </Toolbar>
    </Header>
  );
}

export default Navbar;
