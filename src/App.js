import React from 'react';
import './App.css'
import Home from "./page/Home";


export default class App extends React.Component{
       render(){
        return(
          <div className='App' >
             <Home/>
          </div>
        )
       }
}
