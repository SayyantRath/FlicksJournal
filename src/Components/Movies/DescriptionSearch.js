import { useState, useEffect } from "react";
import { Input, Button } from "antd";

const { Search } = Input;

const DescriptionSearch = (props) => {
  const [query, setQuery] = useState("batman");
  const [page, setPage] = useState("1");

  const onSearch = (event) => {
    console.log(event);
    console.log(query);
    setQuery(event);
  };

  const clickHandler = () => {
    setPage((prevState) => parseInt(prevState) + 1);
    console.log(page);
  }

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${query}&page=${page}&type=movie&apikey=cb8625d1`)
      .then((response) => response)
      .then((response) => response.json())
      .then((data) => props.onSearch(data));
  }, [query, page]);

  return (
    <div className="description-search">
      <h2 className="description-search__big">
        {" "}
        Streamlined. Intuitive. Comprehensive.{" "}
      </h2>
      <p className="description-search__small">
        {" "}
        Access a movie's most essential details through this easy to use
        Internet movie database{" "}
      </p>
      <Button onClick={clickHandler}>Click me</Button>
      <div className="description-search__searchBar">
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
