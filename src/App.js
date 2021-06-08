import { useState } from "react";
import { Layout, Modal } from "antd";
import Movies from "./Components/Movies/Movies";
import "./App.css";
import logo from "./FlicksCentral.png";
import DescriptionSearch from "./Components/Movies/DescriptionSearch";

const { Header, Content } = Layout;

const App = () => {
  const [results, setResults] = useState([]);
  const [numResults, setNumResults] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalResults, setModalResults] = useState(null);

  const searchHandler = (queryResults) => {
    console.log(queryResults);
    setResults(queryResults);
    setNumResults(queryResults.totalResults);
  };

  const onShowModal = (id) => {
    setShowModal(true);

    fetch(`http://www.omdbapi.com/?i=${id}&y=&plot=short&tomatoes=true&r=json&apikey=$cb8625d1`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        setModalResults(response);
      })
  };

  return (
    <div className="full">
      <Layout className="layout">
        <Header className="header">
          <img src={logo} alt="Logo" height="65" />
        </Header>
        <div className="divider" />
        <Content>
          <DescriptionSearch onSearch={searchHandler} />
          <Movies
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
          />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
