import { useState, useEffect } from "react";
import { Input } from "antd";
import logo from "../../logo.JPG";
import "./DescriptionSearch.css";

const { Search } = Input;

const DescriptionSearch = (props) => {
  // state variables to hold query settings (home page is defaulted to an Avengers query)
  const [query, setQuery] = useState("Avengers");
  const [isHome, setIsHome] = useState(true);

  // refresh function
  const refreshPage = () => {
    window.location.reload();
  }
  
  // Search handler
  const onSearch = (event) => {
    setQuery(event);
    setIsHome(false);
  };

  // Effect hook that executes and fetches from API everytime this component is re rendered
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${query}&type=movie&apikey=cb8625d1`)
      .then((response) => response)
      .then((response) => response.json())
      .then((data) => {
        props.onUpdateQuery(query);
        props.onSearch(data, isHome);
      });
  }, [query]);
  
  return (
    <div className="description-search">
      <img className="logo" src={logo} alt="logo" onClick={refreshPage}/>
      <h2 className="description-search__big">
        <span className="streamlined"><span style={{ fontSize: "50px" }}>S</span>TREAMLINED.{" "}</span>
        <span className="comprehensive"><span style={{ fontSize: "50px" }}>C</span>OMPREHENSIVE.{" "}</span>
        <span className="intuitive"><span style={{ fontSize: "50px" }}>I</span>NTUITIVE.{" "}</span>
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
