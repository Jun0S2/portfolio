import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link as LinkScroll } from "react-scroll";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#c2c2c2" }}>
        <Toolbar>
          <Button color="inherit">
            <LinkScroll
              activeClass="active"
              to="first"
              spy={true}
              smooth={true}
              offset={-70}
              duration={150}
            >
              About Me
            </LinkScroll>
          </Button>
          <Button color="inherit">
            <LinkScroll
              activeClass="active"
              to="second"
              spy={true}
              smooth={true}
              offset={-70}
              duration={150}
            >
              Skills
            </LinkScroll>
          </Button>
          <Button color="inherit">
            <LinkScroll
              activeClass="active"
              to="third"
              spy={true}
              smooth={true}
              offset={-70}
              duration={150}
            >
              Activities
            </LinkScroll>
          </Button>
          <Button color="inherit">
            <LinkScroll
              activeClass="active"
              to="fourth"
              spy={true}
              smooth={true}
              offset={-70}
              duration={150}
            >
              Projects
            </LinkScroll>
          </Button>
          <Button color="inherit">
            <LinkScroll
              activeClass="active"
              to="fifth"
              spy={true}
              smooth={true}
              offset={-70}
              duration={150}
            >
              Contact
            </LinkScroll>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
