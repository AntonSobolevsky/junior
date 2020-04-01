import { call, put, takeEvery } from "redux-saga/effects";

import {
  GAMES_FETCH_REQUESTED,
  GAME_FETCH_REQUESTED,
  fetchGamesSuccess,
  fetchGameSuccess,
  fetchGamesFailed,
  fetchGameFailed
} from "./actions";
import ApiService from "./ApiService";

const Api = new ApiService();

function* fetchGames(action) {
  try {
    const games = yield call(Api.fetchGames, action.payload.search);
    yield put(fetchGamesSuccess(games));
  } catch (e) {
    yield put(fetchGamesFailed(e));
  }
}

function* fetchGame(action) {
  try {
    const game = yield call(Api.fetchGame, action.payload.id);
    if (game) {
      yield put(fetchGameSuccess(game[0]));
    } else {
      yield put(fetchGameFailed({}));
    }
  } catch (e) {
    yield put(fetchGameFailed(e));
  }
}

function* mySaga() {
  yield takeEvery(GAMES_FETCH_REQUESTED, fetchGames);
  yield takeEvery(GAME_FETCH_REQUESTED, fetchGame);
}

export default mySaga;
