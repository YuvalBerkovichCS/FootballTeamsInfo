import styled from "styled-components";
import List from "@mui/material/List";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export const FavoritesList = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80vw;
`;

export const HomeButton = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 10px;
`;

export const HomeIcon = styled(SportsSoccerIcon)`
  color: white;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
