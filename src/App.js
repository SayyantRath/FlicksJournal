import {useState} from 'react';
import { Layout } from "antd";
import Movies from "./Components/Movies/Movies";
import "./App.css";
import logo from './FlicksCentral.png';
import DescriptionSearch from "./Components/Movies/DescriptionSearch";

const { Header, Content} = Layout;

const App = () => {

  const [results, setResults] = useState(null);

  const searchHandler = (queryResults) => {
    console.log(queryResults);
    setResults(queryResults);
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <img src={logo} alt="Logo" height="65" />
      </Header>
      <div className= "divider"/>
      <Content>
        <DescriptionSearch onSearch={searchHandler}/>  
        <Movies toDisplay={results}/>
      </Content>
    </Layout>
  );
}

export default App;
