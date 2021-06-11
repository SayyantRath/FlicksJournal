import { useState, useEffect } from "react";
import { Input, Button } from "antd";
import "./DescriptionSearch.css";

const { Search } = Input;

const DescriptionSearch = (props) => {
  const [query, setQuery] = useState("Avengers");
  const [isHome, setIsHome] = useState(true);

  const onSearch = (event) => {
    setQuery(event);
    setIsHome(false);
  };

  useEffect(() => {

    fetch(`http://www.omdbapi.com/?s=${query}&type=movie&apikey=cb8625d1`)
      .then((response) => response)
      .then((response) => response.json())
      .then((data) => {
        props.onSearch(data, isHome);
        props.onUpdateQuery(query);
      });
  }, [query]);

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
      <div className="description-search__searchBar">
        <Search
          placeholder="Search movie by name"
          enterButton="Lights. Cameras. Action!"
          size="large"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default DescriptionSearch;
