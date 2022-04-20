import React from "react";

import { styled } from "@mui/material/styles";
import { Card, Grid, CardActionArea } from "@mui/material";

// 카드 효과 스타일
const StyledCard = styled(Card)(() => ({
  position: "relative",
  border: "none",
  outline: "none",

  color: "#666",
  "&:hover": {
    animation: "circlemove 1.5s infinite linear",
  },
  "@keyframes circlemove": {
    "0%,100%": { transform: "translate(-1%,-1%)" },
    "50%": {
      transform: "translate(-1%,-2%)",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
  },
}));

// 타이틀
const ProfileTitle = styled("div")(() => ({
  alignItems: "center",
  fontWeight: "bold",
  color: "black",
}));
// 날짜 스타일
const ProfileDate = styled("div")(() => ({
  alignItems: "center",
  whiteSpace: "pre-line",
  color: "#FF6B6B",
}));
// 부가정보 스타일
const ProfileContent = styled("div")(() => ({
  alignItems: "center",
  color: "grey",
  whiteSpace: "pre-line",
}));

export default function CardComponent({ activity }) {
  const insideInfo = () => {
    return (
      <StyledCard
        variant="outlined"
        sx={{
          mx: activity.marginX,
          py: 3,
          px: 1,
        }}
      >
        <CardActionArea sx={{ px: 5, pt: 2 }}>
          <ProfileTitle
            sx={{ fontSize: { sm: "1.0rem", xs: "1rem", md: "1.2rem" } }}
          >
            {activity.title}
          </ProfileTitle>
          <ProfileDate
            sx={{ fontSize: { sm: "0.7rem", xs: "0.6rem", md: "1.0rem" } }}
          >
            {activity.date}
          </ProfileDate>
          <ProfileContent
            sx={{ fontSize: { sm: "0.8rem", xs: "0.8rem", md: "0.8rem" } }}
          >
            {activity.contents}
          </ProfileContent>
        </CardActionArea>
      </StyledCard>
    );
  };
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      {insideInfo()}
    </Grid>
  );
}
