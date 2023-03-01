import LoginPage from "./layouts/LoginPage/LoginPage";
import { ThemeProvider } from "@mui/system";
import themeSetting from "./theme";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
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
