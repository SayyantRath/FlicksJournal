import {useState} from 'react';
import { Pagination } from 'antd';
import Card from '../UI/Card';
import MoviesHeader from './MoviesHeader';
import MoviesList from './MoviesList';
import './Movies.css';

const Movies = (props) => {
  const [backendPage, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  
  const [filteredYear, setFilteredYear] = useState('');
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    fetch(`http://www.omdbapi.com/?s=${props.query}&type=movie&y=${selectedYear}&apikey=cb8625d1`)
        .then((response) => response)
        .then((response) => response.json())
        .then((data) => {
          props.onChangeFilter(data);
        });

  };

  /*
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
    setPageSize(newPageSize);

    let nextPageResults = [];

    for (let pageInt = 0; pageInt<(newPageSize / 10); pageInt++){
      
      let pageToGet = page + pageInt;

      fetch(`http://www.omdbapi.com/?s=${props.query}&page=${pageToGet}&type=movie&y=${filteredYear}&apikey=cb8625d1`)
        .then((response) => response)
        .then((response) => response.json())
        .then((data) => {
          nextPageResults.push(...data.Search);
          console.log(nextPageResults);
          if (pageInt === (newPageSize / 10) - 1){
            props.onPageChange(page, nextPageResults);
          }
        });
    } 
  }

  const showModal = (id) => {
    props.onShowModal(id);
  }

  return (
    <div>
      <Card className='movies'>
      <MoviesHeader isHome={props.isHome} filteredYear={filteredYear} onChangeFilter={filterChangeHandler}/>
      <MoviesList response={props.response} onShowModal = {showModal} results={props.results}/>
      <div className='pages'>
        <p className="page-total"> {`Total ${props.numResults} items`}</p>
        <Pagination
          total={props.numResults}
          showSizeChanger={false}
          /*showTotal={total => `Total ${total} items`}*/
          onChange={pageChangeHandler}
        />
      </div>
      </Card>
    </div>
  );
};

export default Movies;