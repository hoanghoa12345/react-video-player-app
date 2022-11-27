import { IconButton, Paper, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { FormEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
type Props = {
  display?: string;
};

const SearchBar = ({ display }: Props) => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/result?search_query=${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        display: { xs: display || "none", sm: "block" },
      }}
    >
      <input
        className="search-bar"
        placeholder="Nhập nội dung tìm kiếm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          maxWidth: "100%",
          backgroundColor: "transparent",
          color: theme.palette.mode === "dark" ? grey[100] : grey[600],
        }}
      />
      <IconButton
        type="submit"
        sx={{ p: 1, color: grey[500] }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
