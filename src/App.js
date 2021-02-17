import { ThemeProvider, Button } from "@material-ui/core";
import React from "react";
import BandButton from "./Common/BandButton";
import theme from "./Theme/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BandButton color="primary">Click Me</BandButton>
    </ThemeProvider>
  );
};

export default App;
