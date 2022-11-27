import { Box, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import { Sidebar, Videos } from "../components/index";
import { grey } from "@mui/material/colors";
import { useQuery, gql } from "@apollo/client";
import { Category } from "../utils/types";

type Props = {};
const Feed = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: "claxffms62yhp0b16r3jefm3j",
    name: "Lofi Music",
    updatedAt: "2022-11-26T04:27:29.930307+00:00",
  });

  const GET_CATEGORIES = gql`
    query Categories {
      categories {
        id
        name
        updatedAt
      }
    }
  `;

  const GET_CATEGORY_BY_ID = gql`
    query getCategoryById($id: ID!) {
      category(where: { id: $id }) {
        id
        name
        updatedAt
        videos(orderBy: createdAt_DESC) {
          createdAt
          id
          publishedAt
          title
          updatedAt
          viewCount
          thumbnail {
            url
          }
          channelName
        }
      }
    }
  `;
  const {
    loading: cLoading,
    error: cError,
    data: dataCategories,
  } = useQuery(GET_CATEGORIES);
  const {
    loading: cyLoading,
    error: cyError,
    data: dataCategory,
  } = useQuery(GET_CATEGORY_BY_ID, {
    variables: { id: selectedCategory.id },
  });

  return (
    <Stack flexDirection={{ sx: "column", md: "row" }}>
      <Box
        height={{ sx: "auto", md: "92vh" }}
        borderRight={"2px solid" + grey[300]}
        px={{ sx: 0, md: 2 }}
      >
        <Sidebar
          loading={cLoading}
          error={cError?.message}
          categories={dataCategories?.categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" mt={1.5}>
          Copyright &copy; 2022 MyClip
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto" }} height="90vh" flex={2}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {selectedCategory.name}{" "}
          <span style={{ color: blue[500] }}>videos</span>
        </Typography>

        <Videos
          loading={cyLoading}
          error={cyError?.message}
          videos={dataCategory?.category?.videos}
        />
      </Box>
    </Stack>
  );
};

export default Feed;
