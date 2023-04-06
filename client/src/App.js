import LoginPage from "./layouts/LoginPage/LoginPage";
import Dashboard from "./layouts/Admin/Dashboard/Dashboard.jsx";
//THEME CONFIGAURATION
import { ThemeProvider } from "@mui/system";
import themeSetting from "./theme";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
//CUSTOM CSS
import "./styles/custom.global.css";
import { Route, Routes } from "react-router-dom";

function App() {
  let theme = createTheme(themeSetting());
  theme = responsiveFontSizes(theme);
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
