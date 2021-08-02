import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import Register from "./components/pages/Register";

import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import './App.css';
import MenuBar from './components/Menubar';
import { AuthProvider } from './components/context/auth';
import AuthRoute from './util/AuthRoute';
import SinglePost from './components/pages/SinglePost';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Container>
        <MenuBar/>
        <Route exact path="/" component={Home}/>
        <AuthRoute exact path="/login" component={Login}/>
        <AuthRoute exact path="/register" component={Register}/>
        <Route exact path="/posts/:postId" component={SinglePost} />
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default App;
