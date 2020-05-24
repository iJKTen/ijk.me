import React from 'react';
import { GlobalStyle } from './components/GlobalStyled';
import { Router } from '@reach/router';
import PrimaryNavigation from './components/Navigation/PrimaryNavigation';
import Home from './screens/Home/Home';
import Footer from './components/Footer/Footer';
import Project from './screens/Projects/Project';
import Resume from './screens/Resume/Resume';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <PrimaryNavigation />
      </header>
      <main>
        <Router>
          <Home path="/" />
          <Resume path="resume" />
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
