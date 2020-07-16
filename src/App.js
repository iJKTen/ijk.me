import React, { Suspense, lazy } from 'react';
import { GlobalStyle } from './components/GlobalStyled';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrimaryNavigation from './components/Navigation/PrimaryNavigation';
import Home from './screens/Home/Home';
import Footer from './components/Footer/Footer';

const Resume = lazy(() => import('./screens/Resume/Resume'));
const Projects = lazy(() => import('./screens/Projects/Projects'));

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <header>
          <PrimaryNavigation />
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
