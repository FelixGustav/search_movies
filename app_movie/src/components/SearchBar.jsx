// import { useState } from 'react'

// function SearchBar({ onSearch }) {
//   const [input, setInput] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (input.trim()) {
//       onSearch(input)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Buscar filme"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button type="submit">Buscar</button>
//     </form>
//   )
// }

// export default SearchBar


import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSearch(input)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Buscar filme"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">Buscar</button>
    </form>
  )
}

export default SearchBar
