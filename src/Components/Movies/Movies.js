import {useState} from 'react';

import Card from '../UI/Card';
//import MoviesFilter from './MoviesFilter';
//import ExpensesList from './ExpensesList';
import './Movies.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  /*
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
  return (
    <div>
      <Card className='movies'>
      </Card>
    </div>
  );
};

export default Expenses;