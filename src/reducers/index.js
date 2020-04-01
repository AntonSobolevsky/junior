import {
  GAMES_FETCH_SUCCEEDED,
  GAME_FETCH_SUCCEEDED,
  CHANGE_PAGE,
  GAMES_FETCH_REQUESTED,
  GAME_FETCH_REQUESTED,
  GAMES_FETCH_FAILED,
  GAME_FETCH_FAILED
} from "../actions";

const initState = {
  title: "Game Portal",
  games: [],
  offset: 0,
  count: 0
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case GAMES_FETCH_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }

    case GAMES_FETCH_FAILED: {
      return {
        ...state,
        loading: false
      };
    }

    case GAMES_FETCH_SUCCEEDED: {
      const { games } = action.payload;

      return {
        ...state,
        games,
        count: games.length,
        offset: 0,
        game: null,
        loading: false
      };
    }

    case GAME_FETCH_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }

    case GAME_FETCH_FAILED: {
      return {
        ...state,
        loading: false
      };
    }

    case GAME_FETCH_SUCCEEDED: {
      const { game } = action.payload;

      return {
        ...state,
        game,
        loading: false,
        games: []
      };
    }

    case CHANGE_PAGE: {
      const { page } = action.payload;
      const offset = (page - 1) * 10;

      return {
        ...state,
        offset
      };
    }

    default:
      return state;
  }
}
