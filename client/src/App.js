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
import CreateVideo from "./components/CreateVideo"
import Comments from './components/comments/Comments'; 

const App = () => (
  <>
  <AppColor>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/view" component={ViewVideo} />
          <ProtectedRoute exact path="/videos" component={CreateVideo} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/comments" component={Comments}/>
          {/* <Route exact path="/videos/:video_id" component={VideoView} /> */}
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