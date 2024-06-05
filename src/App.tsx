import { Box } from "@mui/material";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, SearchBar } from "./components";
import { Feed, VideoDetail, SearchResult } from "./pages";
import { ColorModeProvider } from "./hooks/useTheme";

function App() {
  const client = new ApolloClient({
    uri: import.meta.env.VITE_CDN_BE_URL,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ColorModeProvider>
        <BrowserRouter>
          <Box>
            <span className="shadow-effect" />
            <Navbar />
            <Routes>
              <Route index path="/" element={<Feed />} />
              <Route path="watch" element={<VideoDetail />} />
              <Route path="search" element={<SearchBar display="block" />} />
              <Route path="result" element={<SearchResult />} />
              <Route path="*" element={<h2>Not Found</h2>} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ColorModeProvider>
    </ApolloProvider>
  );
}

export default App;
