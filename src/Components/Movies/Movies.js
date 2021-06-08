//import {useState} from 'react';

import Card from '../UI/Card';
//import MoviesFilter from './MoviesFilter';
import MoviesList from './MoviesList';
import './Movies.css';

const Movies = (props) => {
  /*
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  <MoviesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />

  */

  const showModal = (id) => {
    props.onShowModal(id);
  }

  return (
    <div>
      <Card className='movies'>
      <MoviesList onShowModal = {showModal} results={props.results}/>
      </Card>
    </div>
  );
};

export default Movies;