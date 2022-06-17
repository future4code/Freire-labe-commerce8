import React from 'react';
import Header from './components/Header/header'
import Home from './components/Home/home';
import Carrinho from './components/Carrinho/carrinho';

import './App.css';

class App extends React.Component {
  render() {
  return (
  <div className='App'>
    <Header/>
    <Home/>
    <Carrinho/>

  </div>

  )
 }

}

export default App;