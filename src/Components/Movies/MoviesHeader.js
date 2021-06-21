import MoviesFilter from './MoviesFilter';
import './MoviesHeader.css';

const MoviesHeader = props => {
  
  // Handler for change to filter - pass filtered year back up to above components for refetching with year
  const filterChangeHandler = selectedYear => {
    props.onChangeFilter(selectedYear);
  }

  // Controls header of body based on whether or not something has been searched
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