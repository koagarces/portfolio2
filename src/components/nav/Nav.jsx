import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import React from "react";
import { Stack } from "@mui/material";

const Nav = () => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={4}
    >
      <Button>About</Button>
      <Button>Skills</Button>
      <Button>Projects</Button>
    </Stack>
  );
};

export default Nav;
