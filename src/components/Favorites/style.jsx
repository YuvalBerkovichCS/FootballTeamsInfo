import styled from "styled-components";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SearchIcon from "@mui/icons-material/Search";

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

export const SearchBar = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const SearchText = styled(TextField)`
  margin-bottom: 100px;
`;

export const SearchInputAdornment = styled(InputAdornment)``;

export const SearchTeamIcon = styled(SearchIcon)``;
