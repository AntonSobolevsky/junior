import axios from "axios";

const userKey = "user-key";

export default class ApiService {
  constructor() {
    this.API_URL = "https://api-v3.igdb.com";
    this.API_KEY = "9517d214e7164e977dd8bcba5573ef91";

    this.base = `https://cors-anywhere.herokuapp.com/${this.API_URL}/games/`;

    this.headers = {
      headers: {
        [userKey]: this.API_KEY,
        Accept: "application/json"
      }
    };
  }

  fetchGames = search => {
    const params = {
      fields: "name, screenshots.url",
      search,
      limit: search ? 50 : 10
    };

    return axios
      .get(this.base, { ...this.headers, params })
      .then(body => body.data);
  };

  fetchGame = id => {
    const params = {
      fields:
        "name, age_ratings.category, age_ratings.rating, total_rating, summary, genres.name, url"
    };

    return axios
      .get(`${this.base}${id}/`, { ...this.headers, params })
      .then(body => body.data);
  };
}
