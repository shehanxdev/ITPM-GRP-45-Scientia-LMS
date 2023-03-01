import LoginPage from "./layouts/LoginPage/LoginPage";
//THEME CONFIGAURATION
import { ThemeProvider } from "@mui/system";
import themeSetting from "./theme";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
//CUSTOM CSS
import "./styles/custom.global.css";

function App() {
  const theme = createTheme(themeSetting());
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LoginPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
