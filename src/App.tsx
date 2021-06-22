import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import styled from "styled-components";
import Routes from './routes'

const AppLayout = styled.div`
  min-height: 100vh;
`;

const App: React.FC = () => (
  <Router>
    <AppLayout>
      <Routes />
    </AppLayout>
  </Router>
);

export default App;
