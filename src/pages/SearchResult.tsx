import React from "react";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { gql, useQuery } from "@apollo/client";
import { Videos } from "../components";

type Props = {};

const SearchResult = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search_query");
  const SEARCH_VIDEO_QUERY = gql`
    query getVideoById($query: String!) {
      videos(where: { _search: $query }) {
        id
        title
        thumbnail {
          url
        }
        updatedAt
        channelName
        createdAt
        viewCount
      }
    }
  `;
  const { loading, error, data } = useQuery(SEARCH_VIDEO_QUERY, {
    variables: {
      query: searchTerm,
    },
  });
  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900} mb={3} ml={{ sm: "100px" }}>
        Search Results for{" "}
        <span style={{ color: blue[500] }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos
          loading={loading}
          error={error?.message}
          videos={data?.videos}
        />
      </Box>
    </Box>
  );
};

export default SearchResult;
