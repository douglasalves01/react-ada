import MovieList from "./MovieList";

const App = () => {
  // Dados fictícios de filmes
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      genre: "Action",
      releaseYear: 2020,
      rating: 8.5,
    },
    {
      id: 2,
      title: "Movie 2",
      genre: "Comedy",
      releaseYear: 2019,
      rating: 7.9,
    },
    { id: 3, title: "Movie 3", genre: "Drama", releaseYear: 2021, rating: 9.0 },
  ];

  return (
    <div className="app">
      <h1>Movie Catalog</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
