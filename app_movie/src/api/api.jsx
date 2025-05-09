import axios from 'axios'

const API_KEY = '9d21352e' // Substitua pela sua chave da OMDB
const API_URL = 'https://wwwhttp://www.omdbapi.com/?i=tt38 96198&apikey=9d21352e.omdbapi.com/'

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
