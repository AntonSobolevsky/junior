export const GAMES_FETCH_REQUESTED = "GAMES_FETCH_REQUESTED";
export const GAMES_FETCH_SUCCEEDED = "GAMES_FETCH_SUCCEEDED";
export const GAMES_FETCH_FAILED = "GAMES_FETCH_FAILED";

export const GAME_FETCH_REQUESTED = 'GAME_FETCH_REQUESTED';
export const GAME_FETCH_SUCCEEDED = 'GAME_FETCH_SUCCEEDED';
export const GAME_FETCH_FAILED = 'GAME_FETCH_FAILED';

export const CHANGE_PAGE = 'CHANGE_PAGE';

export const fetchGames = (search = '') => {
  return {
    type: GAMES_FETCH_REQUESTED,
    payload: { search}
  };
};

export const fetchGamesSuccess = games => {
  return {
    type: GAMES_FETCH_SUCCEEDED,
    payload: { games }
  };
};

export const fetchGamesFailed = error => {
  return {
    type: GAMES_FETCH_FAILED,
    payload: { error }
  };
};

//------

export const changePage = page => {
  return {
    type: CHANGE_PAGE,
    payload: { page }
  };
};

//------

export const fetchGame = id => {
  return {
    type: GAME_FETCH_REQUESTED,
    payload: { id }
  };
};

export const fetchGameSuccess = game => {
  return {
    type: GAME_FETCH_SUCCEEDED,
    payload: { game }
  };
};

export const fetchGameFailed = error => {
  return {
    type: GAME_FETCH_FAILED,
    payload: { error }
  };
};
