import React from 'react';
import { About, Projects, NotFound } from './pages/index';
import { Footer, Navbar } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
