import styled from "styled-components";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircularProgress from "@mui/material/CircularProgress";

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TeamsBox = styled(Box)``;
export const TeamsList = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80vw;
`;

export const FavoritesButton = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  margin: 10px;
`;

export const FavoritesIcon = styled(FavoriteIcon)`
  color: red;
`;

export const Loading = styled(CircularProgress)``;

export const LoadderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
