import axios from 'axios'

export const fetchMovies = async (query) => {
  const response = await axios.get(API_URL, {
    params: {
      s: query,
      apikey: API_KEY
    }
  })
  return response.data
}

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(API_URL, {
    params: {
      i: id,
      apikey: API_KEY
    }
  })
  return response.data
}
