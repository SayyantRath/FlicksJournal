import { Input } from 'antd';
import './MoviesFilter.css';

const MoviesFilter = props => {

  // Handler for change to filter (pass back up to filter results stored in above component)
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='movies-filter'>
      <div className='movies-filter__control'>
        <label>Filter by year</label>
        <Input placeholder="Enter a year" style={{width : 100, marginLeft: -200}} onPressEnter={filterChangeHandler} size="small"/>
      </div>
    </div>
  );
};

export default MoviesFilter;