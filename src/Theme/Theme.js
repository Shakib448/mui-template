import { createMuiTheme } from "@material-ui/core";
import { deepPurple, green } from "@material-ui/core/colors";
import "fontsource-roboto";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: green[500],
      contrastText: deepPurple[900],
    },
  },
});

export default theme;
