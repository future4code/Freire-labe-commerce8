import React from 'react';
import './App.css';
import Home from "./page/Home";

export default class App extends React.Component{

  state = {
   
    query:"",
    minPrice: "",
    maxPrice:"",
    sortingParameter: "title",
    order: 1
         
  }

  updateQuery=(event)=>{
    this.setState({
    query: event.target.value
    })
  }

  updateMinPrice=(event)=>{
    this.setState({
    minPrice: event.target.value
    })
  }

  updateMaxPrice=(event)=>{
    this.setState({
    maxPrice: event.target.value
    })
  }

  updateSortingParameter=(event)=>{
    this.setState({
    sortingParameter: event.target.value
    })
  }


  render(){
   return(
    <div className='App'>
    
    

      <filtro
        query={this.state.query}
        updateQuery={this.updateQuery}
        updateMinPrice={this.updateMinPrice}
        updateMaxPrice={this.updateMaxPrice}
        updateSortingParameter={this.updateSortingParameter}
        updateOrder={this.updateOrder}
        minPrice={this.state.minPrice}
        maxPrice={this.state.maxPrice}
        sortingParameter={this.state.sortingParameter}
        order={this.state.order}
      />      

      
      <input 
        placeholder="Buscar"
        value={this.state.query}
        onChange={this.updateQuery}
      />
 
      <input
        type="number" 
        placeholder="Preço Mínimo"
        value={this.state.minPrice}
        onChange={this.updateMinPrice} 
      />
 
      <input
        type="number"
        placeholder="Preço Máximo"
        value={this.state.maxPrice}
        onChange={this.updateMaxPrice}
      /> 
           
            
      <span>
        <label for="sort">Ordenação</label>
        <select 
          name="sort"
          value={this.state.sortingParameter}
          onChange={this.updateSortingParemeter}
        >
          <option value="title">Descrição</option>
          <option value="price">Preço</option>
        </select>
      </span>
        
      <div>
      {this.state.jobs
      .filter(prod =>{
        return prod.title.toLowerCase().includes(this.state.query).toLowerCase() 
      })
      .filter(prod=>{
        return this.state.minPrice === "" || prod.price >= this.state.minPrice
      })
      .filter(prod=>{
        return this.state.maxPrice === "" || prod.price <= this.state.maxPrice
      })
      .sort((a,b)=>{
        switch (this.state.sortingParameter){
          case "title":
            return this.state.order * a.title.localeCompare(b.title)
          default:
            return this.state.order * (a.price - b.price)
       }
      })
             
      .map(prod => {
        return <Home key={prod.id} prod={prod} />
      })}
      </div>
    </div>
    )
  }
} 
   