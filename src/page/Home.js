
import React from 'react';

import './Home.css'

import  camiseta1 from '../imgs/camiseta1.jpeg';
import  camisa from '../imgs/camisa.jpeg';
import  blusa4 from '../imgs/blusa4.jpeg';
import  blusa5 from '../imgs/blusa5.jpeg';



  
export default class Home extends React.Component{

    render (){  
   return (
        <>
        <h1> Loja </h1>
        <div>
          <p> Ordenação </p>
            <select>
              <option value = 'Crescente'>Crescente</option>
              <option value = 'Decrescente'> Decrescente</option>
            </select>
      </div>
  
    
        <p> Quantidade de produto: 4 </p>
            <br/>

        <div className='conteudo'>


          <div className='card'> 
              <img className='imagem'src={camiseta1} alt=""/> 
              <p> Camiseta Masculina com estampa de Galáxia</p>
              <p> valor R$ 60,00</p>
              <button className='botao'> adicionar ao carrinho </button>
          </div>
  
            <div className='card'>
            <img className='imagem' src={camisa} alt=""/> 
            <p> Camisa feminina</p>
            <p> valor R$ 30,00</p>
            <button  className='botao' onClick={this.card}> adicionar ao carrinho </button>
            </div>
  
            <div className='card'>
            <img className='imagem' src={blusa4} alt=""/> 
            <p> Blusa de Frio Masculina </p>
            <p> valor R$ 200,00</p>
            <button className='botao' button onClick={this.card}> adicionar ao carrinho </button>
            </div>
  
            <div className='card'> 
            <img className='imagem' src={blusa5} alt=""/>
            <p> Blusa de Frio fases da lua</p>
            <p> valor R$ 120,00</p>
            <button className='botao' button onClick={this.card}> adicionar ao carrinho </button>
            </div>
  
      </div>
        </>
   )
   }
  }