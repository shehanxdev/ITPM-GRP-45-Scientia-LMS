import LoginPage from "./layouts/LoginPage/LoginPage";
//THEME CONFIGAURATION
import { ThemeProvider } from "@mui/system";
import themeSetting from "./theme";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
//CUSTOM CSS
import "./styles/custom.global.css";

function App() {
  let theme = createTheme(themeSetting());
  theme = responsiveFontSizes(theme);
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <LoginPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
