// function MovieDetail({ movie, onClose }) {
//   return (
//     <div className="modal" style={{ background: '#fff', padding: 20, border: '1px solid #ccc' }}>
//       <button onClick={onClose}>Fechar</button>
//       <h2>{movie.Title}</h2>
//       <p><strong>Diretor:</strong> {movie.Director}</p>
//       <p><strong>Sinopse:</strong> {movie.Plot}</p>
//       <p><strong>Gênero:</strong> {movie.Genre}</p>
//       <p><strong>Avaliação:</strong> {movie.imdbRating}</p>
//     </div>
//   )
// }

// export default MovieDetail

function MovieDetail({ movie, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(31, 41, 55, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      zIndex: 10
    }}>
      <div style={{
        background: '#ffffff',
        padding: '30px',
        borderRadius: '50px',
        maxWidth: '1000px',
        width: '100%',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'transparent',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer'
        }}>×</button>

        <h2>{movie.Title}</h2>
        <p><strong>Diretor:</strong> {movie.Director}</p>
        <p><strong>Sinopse:</strong> {movie.Plot}</p>
        <p><strong>Gênero:</strong> {movie.Genre}</p>
        <p><strong>Avaliação:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  )
}

export default MovieDetail

