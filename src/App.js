import Router from "./routes/router";
import { theme } from "./theme/MuiTheme";

import { 
  ThemeProvider
} from "@mui/material";

import './App.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
