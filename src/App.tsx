import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import {
  BrowserRouter,
  HashRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
// import "./App.css";
import { Navbar, SearchBar } from "./components";
import { Feed, VideoDetail, SearchResult } from "./pages";

function App() {
  const client = new ApolloClient({
    uri: import.meta.env.VITE_CDN_BE_URL,
    cache: new InMemoryCache(),
  });
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto",
    },
    palette: {
      mode: "light",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1754,
      },
    },
  });
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Box>
            <Navbar />
            <Routes>
              <Route index path="/" element={<Feed />} />
              <Route path="watch" element={<VideoDetail />} />
              <Route path="search" element={<SearchBar display="block" />} />
              <Route path="result" element={<SearchResult />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
