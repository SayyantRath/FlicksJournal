import { useState } from "react";
import { Layout, Modal } from "antd";
import Movies from "./Components/Movies/Movies";
import "./App.css";
import logo from "./FlicksCentral.png";
import DescriptionSearch from "./Components/Movies/DescriptionSearch";
import ModalDetails from "./Components/Movies/ModalDetails";

const { Header, Content } = Layout;

const App = () => {
  const [results, setResults] = useState([]);
  const [numResults, setNumResults] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalResults, setModalResults] = useState([]);

  const searchHandler = (queryResults) => {
    setResults(queryResults);
    setNumResults(queryResults.totalResults);
  };

  const onShowModal = (id) => {
    console.log(id);
    setShowModal(true);
    setModalResults(id);
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
          >
            <ModalDetails details={modalResults}/>
          </Modal> 
        </Content>
      </Layout>
    </div>
  );
};

export default App;
