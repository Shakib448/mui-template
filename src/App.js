import { ThemeProvider, Button } from "@material-ui/core";
import React from "react";
import theme from "./Theme/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
    </ThemeProvider>
  );
};

export default App;
