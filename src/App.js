import React from 'react';
import { GlobalStyle } from './components/GlobalStyled';
import PrimaryNavigation from './components/Navigation/PrimaryNavigation';
import Home from './screens/Home/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PrimaryNavigation />
      <Home />
    </div>
  );
}

export default App;
