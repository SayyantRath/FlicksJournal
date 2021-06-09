import {useState} from 'react';
import { Pagination } from 'antd';
import Card from '../UI/Card';
//import MoviesFilter from './MoviesFilter';
import MoviesList from './MoviesList';
import './Movies.css';

const Movies = (props) => {
  const [backendPage, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

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

  const pageChangeHandler = (page, newPageSize) => {
    setPage(page);
    
    fetch(`http://www.omdbapi.com/?s=${props.query}&page=${page}&type=movie&apikey=cb8625d1`)
      .then((response) => response)
      .then((response) => response.json())
      .then((data) => props.onPageChange(page, data));

    /*const nextPage = page + 1;

    if (newPageSize != pageSize){
    
      fetch(`http://www.omdbapi.com/?s=${props.query}&page=${nextPage}&type=movie&apikey=cb8625d1`)
        .then((response) => response)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.Search);
          props.onPageSizeChange(data.Search);
        });
      
    }*/
  }

  const showModal = (id) => {
    props.onShowModal(id);
  }

  return (
    <div>
      <Card className='movies'>
      <MoviesList response={props.response} onShowModal = {showModal} results={props.results}/>
      <div className='pages'>
        <Pagination
          total={props.numResults}
          showSizeChanger={false}
          showTotal={total => `Total ${total} items`}
          onChange={pageChangeHandler}
        />
      </div>
      </Card>
    </div>
  );
};

export default Movies;