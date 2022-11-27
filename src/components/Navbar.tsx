import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/remiplayer.webp";
import { SearchBar, UserNav } from "./index";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <Stack
      direction="row"
      top="0"
      alignItems="center"
      p={2}
      position="sticky"
      justifyContent="space-between"
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      <UserNav />
    </Stack>
  );
};

export default Navbar;
