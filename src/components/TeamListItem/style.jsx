import styled from "styled-components";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export const TeamListItem = styled(ListItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  border-radius: 16px;
  margin-bottom: 8px;
`;
export const TeamListItemButton = styled(ListItemButton)``;
export const TeamListItemIcon = styled(ListItemIcon)``;
export const TeamName = styled(ListItemText)`
  display: flex;
  justify-content: flex-start;
  color: black;
  margin-left: 16px;
`;

export const TeamIcon = styled.img`
  max-width: 50px;
  margin-left: 8px;
`;
export const TestButton = styled.button``;
export const FavoriteIconButton = styled(IconButton)``;
export const TeamReadMoreIcon = styled(ReadMoreIcon)``;
export const FavoriteTeamIcon = styled(FavoriteIcon).withConfig({
  shouldForwardProp: (prop) => prop !== "isFavorite",
})`
  color: ${({ isFavorite }) => (isFavorite ? "red" : "")};
`;
