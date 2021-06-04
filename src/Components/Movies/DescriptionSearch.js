import { useState, useEffect } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const DescriptionSearch = props => {
  const [query, setQuery] = useState("batman")

  const onSearch = (event) => {
    console.log(event);
    console.log(query);
    setQuery(event);
  }

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=cb8625d1`)
    .then(response => response)
    .then(response => response.json())
    .then(data => props.onSearch(data))
  }, [props, query])
  
  return (
    <div className= "description-search">
      <h2 className= "description-search__big"> Streamlined. Intuitive. Comprehensive.  </h2>
      <p className= "description-search__small"> Access a movie's most essential details through this 
          easy to use Internet movie database </p>
      <div className="description-search__searchBar" >
        <Search
          placeholder="Search movie by name"
          allowClear
          enterButton="Lights. Cameras. Action!"
          size="large"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default DescriptionSearch;