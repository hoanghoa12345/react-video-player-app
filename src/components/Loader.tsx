import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

type Props = {};

const Loader = (props: Props) => {
  return (
    <Box minHeight="95vh">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default Loader;
