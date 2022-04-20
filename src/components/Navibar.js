import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link as LinkScroll } from "react-scroll";
import { Typography } from "@mui/material";
import { useState } from "react";
import "./common.css";
export default function ButtonAppBar() {
  const [selected] = useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="fixed"
        color="transparent"
        style={{ background: "transparent", color: "white" }}
      >
        <Toolbar>
          <Button color="inherit">
            <LinkScroll
              activeClass="active"
              to="first"
              spy={true}
              smooth={true}
              duration={150}
            >
              <Typography
                color={selected === 1 ? "#FF6B6B" : "inherit"}
                className="menuItem"
              >
                About Me
              </Typography>
            </LinkScroll>
          </Button>
          <Button color="inherit">
            <LinkScroll
              activeClass="active"
              to="second"
              spy={true}
              smooth={true}
              duration={150}
            >
              <Typography
                color={selected === 2 ? "#FF6B6B" : "inherit"}
                className="menuItem"
              >
                Skills
              </Typography>
            </LinkScroll>
          </Button>
          <Button color="inherit">
            <LinkScroll
              activeClass="active"
              to="third"
              spy={true}
              smooth={true}
              duration={150}
            >
              <Typography
                color={selected === 3 ? "#FF6B6B" : "inherit"}
                className="menuItem"
              >
                Activities
              </Typography>
            </LinkScroll>
          </Button>
          <Button color="inherit">
            <LinkScroll
              activeClass="active"
              to="fourth"
              spy={true}
              smooth={true}
              duration={150}
            >
              <Typography
                color={selected === 4 ? "#FF6B6B" : "inherit"}
                className="menuItem"
              >
                Projects
              </Typography>
            </LinkScroll>
          </Button>
          <Button color="inherit">
            <LinkScroll
              activeClass="active"
              to="fifth"
              spy={true}
              smooth={true}
              duration={150}
            >
              <Typography
                color={selected === 5 ? "#FF6B6B" : "inherit"}
                className="menuItem"
              >
                Contact
              </Typography>
            </LinkScroll>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
