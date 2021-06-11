import { Input } from 'antd';
import './MoviesFilter.css';

const MoviesFilter = props => {

  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <Input placeholder="Enter a year" onPressEnter={filterChangeHandler} size="small"/>
      </div>
    </div>
  );
};

export default MoviesFilter;