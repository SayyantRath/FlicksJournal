import { useState } from "react";
import { Layout, Modal } from "antd";
import Movies from "./Components/Movies/Movies";
import "./App.css";
import camcorder from "./camcorder.JPG";
import DescriptionSearch from "./Components/Movies/DescriptionSearch";
import ModalDetails from "./Components/Movies/ModalDetails";

const { Header, Content } = Layout;

const App = () => {
  // State variables for various parts of the website
  const [status, setStatus] = useState("False");
  const [results, setResults] = useState([]);
  const [numResults, setNumResults] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalResults, setModalResults] = useState([]);
  const [query, setQuery] = useState("batman");
  const [isHome, setIsHome] = useState(true);

  // Function to refresh page
  const refreshPage = () => {
    window.location.reload();
  };

  // Passed down function to handle search results and pass down to children for display
  const searchHandler = (queryResults, isHome) => {
    if (queryResults.Response === "False") {
      setResults([]);
    } else {
      setResults(queryResults.Search);
    }
    setStatus(queryResults.Response);
    setNumResults(queryResults.totalResults);
    setIsHome(isHome);
  };

  // Update query to maintain proper queries when going through pages of results
  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  // Function to retrieve the next page's results and pass back down to children for display purposes
  const pageChangeHandler = (newPage, pageChangeResults) => {
    setResults(pageChangeResults);
  };

  // Function to hold filtered results
  const filterChangeHandler = (filteredResults) => {
    setResults(filteredResults.Search);
    setNumResults(filteredResults.totalResults);
    setStatus(filteredResults.Response);
  };

  // Shows modal when user wants deeper info
  const onShowModal = (id) => {
    setShowModal(true);
    setModalResults(id);
  };

  return (
    <div className="full">
      <Layout className="layout">
        <Header className="header">
          <img
            className="logo"
            src={camcorder}
            alt="camera-logo"
            onClick={refreshPage}
          />
        </Header>
        <div className="divider" />
        <Content>
          <DescriptionSearch
            onSearch={searchHandler}
            onUpdateQuery={updateQuery}
          />
          <Movies
            isHome={isHome}
            response={status}
            query={query}
            onPageChange={pageChangeHandler}
            onChangeFilter={filterChangeHandler}
            onShowModal={onShowModal}
            numResults={numResults}
            results={results}
          />
          <Modal
            title="Movie Details"
            visible={showModal}
            width={800}
            onCancel={() => setShowModal(false)}
            cancelButtonProps={{ style: { display: "none" } }}
            onOk={() => setShowModal(false)}
            okButtonProps={{ type: "ghost" }}
            okText="Exit"
          >
            <ModalDetails details={modalResults} />
          </Modal>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
