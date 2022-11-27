import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { VideoItem } from "../utils/types";

import thumbnailVideo from "../assets/thumbnailVideo.webp";
type Props = {
  video: VideoItem;
};

const VideoCard = ({ video }: Props) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
      title={video.title.slice(0, 60)}
      aria-label={video.id}
    >
      <Link to={"/watch?v=" + video.id}>
        <CardMedia
          component="img"
          image={video?.thumbnail.url || thumbnailVideo}
          alt="title"
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "transparent", height: "106px" }}>
        <Link to={"/watch?v=" + video.id}>
          <Typography variant="subtitle1" fontWeight="bold" color={blue[500]}>
            {video.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={"/watch?v=" + video.id}>
          <Typography variant="subtitle2" color="text.secondary">
            {video.channelName}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "text.secondary", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
