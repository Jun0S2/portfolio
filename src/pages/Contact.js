import "./components/styles/IntroStyle.css";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import "./components/styles/Float.css";
import { Grid, IconButton, Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import ContactText from "../pages/components/text/ContactText";
import "../components/UniverseStyle.css";
export default function Contact() {
  const discordId = "June#7825";
  const copyDiscordID = () => {
    navigator.clipboard.writeText(discordId);
    Swal.fire({
      title: "디스코드 아이디가  복사되었습니다. 디스코드에서 봐요 =^._.^=",
      width: 600,
      padding: "3em",
      color: "#716add",
      backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `,
    });
  };

  return (
    <div id="fifth">
      <div className="intro-container">
        {window.innerWidth < 600 ? (
          <Grid
            container
            direction="row"
            alignItems="center"
            sx={{ minHeight: "100vh" }}
          >
            <Grid item row container spacing={0} sx={{ mt: 10 }}>
              준비중입니다.
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="row" alignItems="center">
            <div id="stars-group-1"></div>
            <div id="stars-group-2"></div>
            <div id="stars-group-3"></div>
            <div id="stars-group-4"></div>
            <div id="stars-group-5"></div>
            <div id="stars-group-6"></div>

            {/* Desktop */}
            <Grid
              container
              item
              xs={12}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "100vh" }}
            >
              <ContactText />
              <Grid item>
                <Tooltip title="Check Out My Github" placement="top">
                  <IconButton
                    aria-label="git"
                    size="large"
                    href="https://github.com/Jun0S2"
                    style={{ pointerEvents: "auto" }}
                  >
                    <GitHubIcon style={{ fontSize: "100px", color: "white" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Send Email to Me" placement="top">
                  <IconButton
                    aria-label="email"
                    size="large"
                    href="mailto:leen6225@gmail.com"
                    style={{ pointerEvents: "auto" }}
                  >
                    <MarkunreadIcon
                      style={{ fontSize: "100px", color: "white" }}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Check Me Out with Discord" placement="top">
                  <IconButton
                    aria-label="discord"
                    size="large"
                    onClick={copyDiscordID}
                    style={{ pointerEvents: "auto" }}
                  >
                    <AlternateEmailIcon
                      style={{ fontSize: "100px", color: "white" }}
                    />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
