import MoviesFilter from './MoviesFilter';
import './MoviesHeader.css';

const MoviesHeader = props => {

  const filterChangeHandler = selectedYear => {
    props.onChangeFilter(selectedYear);
  }

  if (props.isHome === true){
    return(
      <h2 className='movies-header__title'> Top Movies </h2>
    )
  }

  return (
    <div>
      <h2 className='movies-header__title'> Results </h2>
      <MoviesFilter
        selected={props.filteredYear}
        onChangeFilter={filterChangeHandler}
      />
    </div>
  )
}

export default MoviesHeader;