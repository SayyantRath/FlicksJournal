import { useState } from "react";
import { Layout, Modal } from "antd";
import Movies from "./Components/Movies/Movies";
import "./App.css";
import camcorder from "./camcorder.JPG";
import DescriptionSearch from "./Components/Movies/DescriptionSearch";
import ModalDetails from "./Components/Movies/ModalDetails";

const { Header, Content } = Layout;

const App = () => {
  const [status, setStatus] = useState("False");
  const [results, setResults] = useState([]);
  const [numResults, setNumResults] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalResults, setModalResults] = useState([]);
  const [query, setQuery] = useState("batman");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isHome, setIsHome] = useState(true);

  const refreshPage = () => {
    window.location.reload();
  }
  
  const searchHandler = (queryResults, isHome) => {
    console.log(queryResults);
    if (queryResults.Response==="False"){
      setResults([]);
    } else {
      setResults(queryResults.Search);
    }
    setStatus(queryResults.Response);
    setNumResults(queryResults.totalResults);
    setIsHome(isHome);
  };

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  }

  const pageChangeHandler = (newPage, pageChangeResults) => {
    console.log(pageChangeResults);
    setPage(newPage);
    setResults(pageChangeResults);
  };

  const filterChangeHandler = filteredResults => {
    setResults(filteredResults.Search);
    setNumResults(filteredResults.totalResults);
    setStatus(filteredResults.Response);
  }

  /*
  const pageSizeChangeHandler = (moreResults) => {

    setPage(prevState => prevState + 1);
    setResults(prevState => 
      [...prevState, ...moreResults]);

    /*if (newPageSize != pageSize){
    
      fetch(`http://www.omdbapi.com/?s=${query}&page=${nextPage}&type=movie&apikey=cb8625d1`)
        .then((response) => response)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.Search);
          setResults(prevState => 
            [...prevState, ...data.Search]);
        });
      
      console.log(results);
      
    }

  }*/

  const onShowModal = (id) => {
    console.log(id);
    setShowModal(true);
    setModalResults(id);
  };

  return (
    <div className="full">
      <Layout className="layout">
        <Header className="header">
          <img className="logo" src= {camcorder} alt="camera-logo" onClick={refreshPage} />
        </Header>
        <div className="divider" />
        <Content>
          <DescriptionSearch onSearch={searchHandler} onUpdateQuery={updateQuery}/>
          <Movies
            isHome={isHome}
            response={status}
            query={query}
            onPageChange={pageChangeHandler}
            //onPageSizeChange={pageSizeChangeHandler}
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
            <ModalDetails details={modalResults}/>
          </Modal> 
        </Content>
      </Layout>
    </div>
  );
};

export default App;
