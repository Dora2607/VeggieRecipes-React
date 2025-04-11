import { createTheme, ThemeProvider } from "@mui/material/styles";
import { darkThemeOptions, lightThemeOptions } from "../theme";
import {  useSelector } from "react-redux";
import { useEffect } from "react";

const ThemeWrapper = ({ children }) => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = createTheme(
    mode === "light" ? lightThemeOptions : darkThemeOptions
  );
  useEffect(() => {
    document.body.style.backgroundColor =
      mode === "light" ? lightThemeOptions.palette.background.default : darkThemeOptions.palette.background.default;
      document.body.style.color =
      mode === "light" ? lightThemeOptions.palette.text.primary : darkThemeOptions.palette.text.primary;
  }, [mode]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
