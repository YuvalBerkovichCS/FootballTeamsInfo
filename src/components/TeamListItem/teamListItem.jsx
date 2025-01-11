import { forwardRef } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

// Use React.forwardRef to forward the ref to the DOM element
const TeamListItem = forwardRef(
  (
    { teamId, teamName, teamIconLink, isFavorite, onFavoriteClick },
    lastBookElementRef
  ) => {
    return (
      <>
        <S.TeamListItem ref={lastBookElementRef} key={teamId}>
          <S.FavoriteIconButton onClick={onFavoriteClick}>
            <S.FavoriteTeamIcon isFavorite={!!isFavorite} />
          </S.FavoriteIconButton>
          <S.TeamIcon src={teamIconLink} alt="" />
          <S.TeamName primary={teamName} />
          <Link to={`/team/${teamId}`}>
            <S.TeamListItemButton>
              <S.TeamReadMoreIcon />
            </S.TeamListItemButton>
          </Link>
        </S.TeamListItem>
      </>
    );
  }
);

export default TeamListItem;
