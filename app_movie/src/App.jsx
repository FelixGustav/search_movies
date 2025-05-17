import { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import MovieDetail from './components/MovieDetails'

import { AxiosHttpClient } from './services/AxiosHttpClient'
import { MovieApi } from './services/MovieApi'

const movieApi = new MovieApi(new AxiosHttpClient())

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (query) => {
    try {
      setLoading(true)
      const data = await movieApi.searchMovies(query)
      if (data.Response === 'True') {
        setMovies(data.Search)
        setError('')
      } else {
        setMovies([])
        setError('Nenhum filme encontrado.')
      }
    } catch (err) {
      setError('Erro ao buscar filmes.')
    } finally {
      setLoading(false)
    }
  }

  const handleSelectMovie = async (id) => {
    const data = await movieApi.getMovieDetails(id)
    setSelectedMovie(data)
  }

  return (
    <div className="container">
      <h1 className="title">Busca de Filmes</h1>

      <SearchBar onSearch={handleSearch} />
      {loading && <p className="info">Carregando...</p>}
      {error && <p className="error">{error}</p>}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onSelect={handleSelectMovie} />
        ))}
      </div>

      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  )
}

export default App
