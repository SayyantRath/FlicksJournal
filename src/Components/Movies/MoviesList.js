import MovieItem from './MovieItem';
import './MoviesList.css';

const ExpensesList = (props) => {
  if (props.results.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  const showModal = (id) => {
    props.onShowModal(id);
  }

  return (
    <ul className='expenses-list'>
       {props.results.Search.map((movie) => (
          <MovieItem
            onShowModal={showModal}
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            img={movie.Poster}
          />
        ))}
    </ul>
  );
};

export default ExpensesList;