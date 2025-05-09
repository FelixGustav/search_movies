function MovieCard({ movie, onSelect }) {
  return (
    <div onClick={() => onSelect(movie.imdbID)} style={{ cursor: 'pointer', margin: '10px' }}>
      <img src={movie.Poster} alt={movie.Title} width="100" />
      <h3>{movie.Title} ({movie.Year})</h3>
    </div>
  )
}

export default MovieCard
