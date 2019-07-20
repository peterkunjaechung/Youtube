import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ViewVideo from './components/ViewVideo';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import styled from "styled-components";
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
  <AppColor>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/view" component={ViewVideo} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </AppColor>
  </>
)

const AppColor = styled.div`
  background-color: #F5F5F5 !important;
`

export default App;