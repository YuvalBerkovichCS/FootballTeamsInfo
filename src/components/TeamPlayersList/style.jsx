import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export const PlayersList = styled(List)``;
export const PlayerItem = styled(ListItem)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  border-radius: 16px;
  margin-bottom: 8px;
`;
export const PlayerName = styled(ListItemText)``;

export const PlayerAvatarListItem = styled(ListItemAvatar)``;

export const PlayerAvatar = styled(Avatar)``;
