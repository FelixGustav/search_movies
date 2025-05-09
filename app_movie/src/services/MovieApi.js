const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '9d21352e';

export class MovieApi {
  constructor(httpClient) {
    this.httpClient = httpClient
  }

  async searchMovies(query) {
    return this.httpClient.get(API_URL, {
      s: query,
      apikey: API_KEY
    })
  }

  async getMovieDetails(id) {
    return this.httpClient.get(API_URL, {
      i: id,
      apikey: API_KEY
    })
  }
}
