import React from "react";

import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import Nabvar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 150px;
`;

const App = () => {

  return (
    <Provider store={store}>
      <div className="App">
        <Nabvar />
        <Container>
          <Sidebar />
          <Main />
        </Container>
        <ToastContainer/>
      </div>
    </Provider>
  );
};

export default App;
