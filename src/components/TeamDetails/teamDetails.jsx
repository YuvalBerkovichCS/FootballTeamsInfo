import TeamPlayersList from "../TeamPlayersList";
import { Link } from "react-router-dom";
import * as S from "./style";

const teamDetails = ({
  teamName,
  country,
  countryFlag,
  players,
  yearFounded,
  sadiumName,
}) => {
  return (
    <>
      <Link to={"/"}>
        <S.HomeButton>
          <S.HomeIcon fontSize="large" />
        </S.HomeButton>
      </Link>
      <S.Container>
        <S.Header>{teamName}</S.Header>
        <S.TeamHeaders>
          <S.TeamHeaderItem>
            <S.TeamListItemAvatar>
              <img src={countryFlag} alt={country} width={30}></img>
            </S.TeamListItemAvatar>
            <S.TeamListItemText
              primary="Country"
              secondary={country}
            ></S.TeamListItemText>
          </S.TeamHeaderItem>
          <S.TeamHeaderItem>
            <S.TeamListItemAvatar>
              <S.YearFoundedIcon />
            </S.TeamListItemAvatar>
            <S.TeamListItemText
              primary="Year Founded:"
              secondary={yearFounded}
            ></S.TeamListItemText>
          </S.TeamHeaderItem>
          <S.TeamHeaderItem>
            <S.TeamListItemAvatar>
              <S.TeamStadiumIcon />
            </S.TeamListItemAvatar>
            <S.TeamListItemText
              primary="Stadium:"
              secondary={sadiumName}
            ></S.TeamListItemText>
          </S.TeamHeaderItem>
        </S.TeamHeaders>
        <TeamPlayersList playersList={players} />
      </S.Container>
    </>
  );
};
export default teamDetails;
