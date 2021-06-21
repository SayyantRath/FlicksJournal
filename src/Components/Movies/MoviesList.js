import MovieItem from './MovieItem';
import './MoviesList.css';

const MoviesList = (props) => {
  
  // Handle failed fetch requests
  if (props.response === "False" || props.results===null || props.results.length === 0) {
    return <h2 className='movies-list__fallback'>Found no movies.</h2>;
  }

  // Pass id back up to above components to render modal
  const showModal = (id) => {
    props.onShowModal(id);
  }

  return (
    <ul className='movies-list'>
      <div className='movies-list__grid'>
       {props.results.map((movie) => (
          <MovieItem
            onShowModal={showModal}
            key={movie.imdbID}
            imdbID={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            img={movie.Poster}
          />
        ))}
      </div>
    </ul>
  );
};

export default MoviesList;