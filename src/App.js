import React, { useState } from "react";

import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

const App = () => {
  const [checked, setChecked] = useState(true);
  console.log(checked);
  return (
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
    </div>
  );
};

export default App;
