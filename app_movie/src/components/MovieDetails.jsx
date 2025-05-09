function MovieDetail({ movie, onClose }) {
  return (
    <div className="modal" style={{ background: '#fff', padding: 20, border: '1px solid #ccc' }}>
      <button onClick={onClose}>Fechar</button>
      <h2>{movie.Title}</h2>
      <p><strong>Diretor:</strong> {movie.Director}</p>
      <p><strong>Sinopse:</strong> {movie.Plot}</p>
      <p><strong>Gênero:</strong> {movie.Genre}</p>
      <p><strong>Avaliação:</strong> {movie.imdbRating}</p>
    </div>
  )
}

export default MovieDetail
