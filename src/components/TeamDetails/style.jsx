import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";

import StadiumIcon from "@mui/icons-material/Stadium";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const TeamHeaders = styled(List)`
  display: flex;
  flex-direction: column;
`;

export const TeamHeaderItem = styled(ListItem)``;

export const TeamListItemText = styled(ListItemText)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const TeamListItemAvatar = styled(ListItemAvatar)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TeamAvatar = styled(Avatar)``;

export const TeamStadiumIcon = styled(StadiumIcon)``;

export const YearFoundedIcon = styled(CalendarMonthIcon)``;

export const TeamImageIcon = styled(ImageIcon)``;
