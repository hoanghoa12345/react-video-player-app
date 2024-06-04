import { Box, Stack, Typography, Container } from "@mui/material";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useQuery, gql } from "@apollo/client";
import { Videos, Loader } from "../components/index";

type Props = {};
const VideoDetail = (props: Props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let videoId = searchParams.get("v");

  const GET_VIDEO_BY_ID = gql`
    query getVideoById($id: ID!) {
      video(where: { id: $id }) {
        channelName
        createdAt
        description
        id
        likeCount
        publishedAt
        title
        updatedAt
        videoUrl
        viewCount
        thumbnail {
          url
        }
        channelName
      }
      videos(where: { id_not: $id }, last: 10, orderBy: createdAt_DESC) {
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
  const {
    loading: vLoading,
    error: vError,
    data: videoData,
  } = useQuery(GET_VIDEO_BY_ID, {
    variables: {
      id: videoId,
    },
  });

  return (
    <Container maxWidth="xl">
      <Box minHeight="95vh">
        {vLoading && <Loader />}
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            {videoData?.video && (
              <Box width="100%" position="sticky" top="86px">
                <ReactPlayer
                  url={videoData?.video.videoUrl}
                  className="react-player"
                  controls
                  playing={true}
                />
                <Typography variant="h5" fontWeight="bold" p={2}>
                  {videoData?.video.title}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  py={1}
                  px={2}
                >
                  <Typography variant="h6">
                    {videoData?.video.channelName}
                    <CheckCircleIcon
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                  <Stack direction="row" gap="20px" alignItems="center">
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(videoData?.video.viewCount).toLocaleString()}{" "}
                      views
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(videoData?.video.likeCount).toLocaleString()}{" "}
                      likes
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            )}
          </Box>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos
              loading={vLoading}
              error={vError?.message}
              videos={videoData?.videos}
              direction="column"
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default VideoDetail;
