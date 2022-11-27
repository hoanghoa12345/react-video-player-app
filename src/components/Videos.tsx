import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { VideoItem } from "../utils/types";
import { Loader, VideoCard } from "./index";
import { red } from "@mui/material/colors";
type Props = {
  videos: VideoItem[];
  direction?: "row" | "column";
  loading: boolean;
  error?: string;
};

const Videos = ({ loading, error, videos, direction }: Props) => {
  if (loading) return <Loader />;
  if (error) return <span style={{ color: red[600] }}>{error}</span>;
  if (videos.length === 0)
    return <span style={{ color: red[600] }}>Không tìm thấy video</span>;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos &&
        videos.map((item: VideoItem, idx: number) => (
          <Box key={idx}>
            <VideoCard video={item} />
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
