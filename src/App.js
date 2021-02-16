import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { green } from "@material-ui/core/colors";

const useStyle = makeStyles({
  root: {
    border: 0,
    borderRadius: 14,
    color: "white",
    background: "linear-gradient(45deg #000, #999) ",
    marginTop: 100,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const App = () => {
  const [checked, setChecked] = useState(true);
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "lightgray",
          flexDirection: "column",
        }}
      >
        <TextField
          variant="filled"
          color="secondary"
          type="email"
          label="Email"
          placeholder="test@gmail.com"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              color="primary"
              onChange={(e) => setChecked(e.target.checked)}
              inputProps={{ "aria-label": "secondary checkbox" }}
              icon={<DeleteIcon />}
              checkedIcon={<SaveIcon />}
            />
          }
          label="Testing Checkbox"
        />
        <ButtonGroup variant="contained" color="primary">
          <Button>Hello World</Button>
          <Button>Hello World</Button>
        </ButtonGroup>
        <Button className={classes.root}>Test style button</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
