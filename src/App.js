import React, { useState } from "react";

import { Button, ButtonGroup, Checkbox } from "@material-ui/core";

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
      }}
    >
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <ButtonGroup variant="contained" color="primary">
        <Button>Hello World</Button>
        <Button>Hello World</Button>
      </ButtonGroup>
    </div>
  );
};

export default App;
