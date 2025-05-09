import { useState } from 'react'
import SearchBar from './components/searchBar'
import MovieCard from './components/movieCard'
import MovieDetail from './components/movieDetails'

import { AxiosHttpClient } from './services/AxiosHttpClient'
import { MovieApi } from './services/MovieApi'

const movieApi = new MovieApi(new AxiosHttpClient())

function App() {
  console.log("ok")
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


  // return (
  //   <div>
  //     <h1>Busca de Filmes</h1>
      
  //     <SearchBar onSearch={handleSearch} />
  //     {loading && <p>Carregando...</p>}
  //     {error && <p>{error}</p>}
  //     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  //       {movies.map((movie) => (
  //         <MovieCard key={movie.imdbID} movie={movie} onSelect={handleSelectMovie} />
  //       ))}
  //     </div>
  //     {selectedMovie && (
  //       <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
  //     )}
  //   </div>
  // )
}

export default App
