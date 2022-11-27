import { IconButton, Menu, MenuItem, Stack, Popover } from "@mui/material";
import React, { useState } from "react";
import { SettingsOutlined, SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
type Props = {};

const UserNav = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenSearchBar = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/search");
  };
  return (
    <Stack direction="row" alignItems="center" p={2}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={handleOpenSearchBar}
        >
          <SearchOutlined />
        </IconButton>
        <IconButton onClick={handleClick}>
          <SettingsOutlined />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
        >
          <MenuItem>Giao diện tối</MenuItem>
        </Menu>
      </div>
    </Stack>
  );
};

export default UserNav;
