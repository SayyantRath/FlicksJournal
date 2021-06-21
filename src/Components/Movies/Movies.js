import { useState } from "react";
import { Pagination } from "antd";
import Card from "../UI/Card";
import MoviesHeader from "./MoviesHeader";
import MoviesList from "./MoviesList";
import "./Movies.css";

const Movies = (props) => {

  // state variable to hold year being filtered for search
  const [filteredYear, setFilteredYear] = useState("");

  // Handler for user filtering
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    // Fetch API results which fit criteria year
    fetch(
      `http://www.omdbapi.com/?s=${props.query}&type=movie&y=${selectedYear}&apikey=cb8625d1`
    )
      .then((response) => response)
      .then((response) => response.json())
      .then((data) => {
        props.onChangeFilter(data);
      });
  };

  // Helper function for pagination which returns a promise for fetching API results
  const getNextPage = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response)
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  };

  // Handler for any type of change to pagination feature
  const pageChangeHandler = (page, newPageSize) => {
    // Handles edge case on home page
    if (page == 0) {
      page = 1;
    }

    // Calculates what page to start it in the backend (adjusted for pageSize)
    page = page * (newPageSize / 10) - (newPageSize - 10) / 10;

    // Arrays to hold results, fetch promises and fetch URLS
    let nextPageResults = [];
    let nextPageRequests = [];
    let nextPageURLS = [];

    // Loop to create all URLs which will be fetched from (backend pagination- one URL per 10 result page from OMDB)
    for (let pageInt = 0; pageInt < newPageSize / 10; pageInt++) {
      let pageToGet = page + pageInt;

      // Push URL to URL holding array
      if (pageToGet * 10 < parseInt(props.numResults) + 10) {
        let URL = `http://www.omdbapi.com/?s=${props.query}&page=${pageToGet}&type=movie&y=${filteredYear}&apikey=cb8625d1`;
        nextPageURLS.push(URL);
      }
    }

    // Call helper function to create fetch promise and push promise to promise holding array
    nextPageURLS.forEach((nextURL) =>
      nextPageRequests.push(getNextPage(nextURL))
    );

    // Wait for all promises to execute and then append results to results holding array
    Promise.all(nextPageRequests).then((nextPagePromiseResults) => {
      nextPagePromiseResults.forEach((nextPagePromiseResult) =>
        nextPagePromiseResult.Search.forEach((result) =>
          nextPageResults.push(result)
        )
      );
      // Pass results back up to update state and send back down for rendering purposes
      props.onPageChange(page, nextPageResults);
      window.scroll(0, 500);
    });
  };

  // Pass id back up for modal rendering
  const showModal = (id) => {
    props.onShowModal(id);
  };

  return (
    <div>
      <Card className="movies">
        <MoviesHeader
          isHome={props.isHome}
          filteredYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <MoviesList
          response={props.response}
          onShowModal={showModal}
          results={props.results}
        />
        <div className="pages">
          <p className="page-total"> {`Total ${props.numResults} items`}</p>
          <Pagination
            total={props.numResults}
            showSizeChanger
            /*showTotal={total => `Total ${total} items`}*/
            onChange={pageChangeHandler}
            pageSizeOptions={[10, 20]}
            hideOnSinglePage={true}
          />
        </div>
      </Card>
    </div>
  );
};

export default Movies;
