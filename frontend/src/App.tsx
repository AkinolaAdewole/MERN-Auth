import React from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <HomeScreen/>
    </>
  );
}

export default App;
