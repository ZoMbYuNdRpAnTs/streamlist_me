import React, { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('popular');
  const API_KEY = '1b2797eaa599396571085fe19a5fc79f';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(err => console.error("API fetch error:", err));
  }, [category]); 

  return (
    <div className="movies-page">
      <h2>{category.replace('_', ' ').toUpperCase()} Movies</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      >
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="now_playing">Now Playing</option>
        <option value="upcoming">Upcoming</option>
      </select>

      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
