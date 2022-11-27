import React from "react";
import { Stack } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import { Category } from "../utils/types";
import { Loader } from "./index";

type Props = {
  loading: Boolean;
  error?: string;
  categories: Category[];
  selectedCategory: Category;
  setSelectedCategory: Function;
};

const Sidebar = ({
  loading,
  error,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <Stack
      direction="row"
      sx={{ overflowY: "auto" }}
      height={{ sx: "auto", md: "95%" }}
      flexDirection={{ md: "column" }}
    >
      {loading && <Loader />}
      {categories &&
        categories.map((category) => (
          <button
            className="category-btn"
            onClick={() => setSelectedCategory(category)}
            style={{
              backgroundColor:
                category.id === selectedCategory.id ? blue[500] : "white",
            }}
            key={category.id}
            aria-label={category.id}
          >
            <span
              style={{
                color:
                  category.id === selectedCategory.id ? "white" : blue[600],
                marginRight: "15px",
              }}
            ></span>
            <span
              style={{
                color: category.id === selectedCategory.id ? "white" : "black",
                opacity: category.id === selectedCategory.id ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        ))}
      {error && <span style={{ color: red[600] }}>{error}</span>}
    </Stack>
  );
};

export default Sidebar;
