import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const useColorModeContext = () => useContext(ColorModeContext);
type ColorModeProviderProps = {
  children: ReactNode;
};

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">(systemTheme.matches ? "dark" : "light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Roboto, sans-serif",
        },
        palette: {
          mode: mode,
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
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
