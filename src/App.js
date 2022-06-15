import React from 'react';
import './App.css';


class App extends React.Component {
<body>
    <div id="root"> </div>
 <script type="text">
   
   class ProdutoFactory {
    constructor(nome,preço,img){
      this.nome = nome,
      this.preço = preço,
      this.img = img
    }
  
    const produto1 = new ProdutoFactory("Camiseta espacial", 100,"img/moda.jpeg")
    const produto2 = new ProdutoFactory("Camiseta espacial", 90,"img/moda.jpeg")
    const produto3 = new ProdutoFactory("Camiseta espacial", 50,"img/moda.jpeg")
    const produto4 = new ProdutoFactory("Camiseta espacial", 30,"img/moda.jpeg")
    const produto5 = new ProdutoFactory("Camiseta espacial", 45,"img/moda.jpeg")
   }
   

  //cabeçalho

        function Header(props){
           return (
                 <header className='cabeçalho'>
                  <h1 className='titulo'> {props.camisetas} </h1>
                 </header>
           )
       },
// componente Principal
                 function App(props){
                  return (
                    <div>
                      <header nomeApp={props.loja.camisetas}/>
                      <content produtos ={props.produtos}/>
                    </div>
                  )
                  }
           
        const element = <App loja ={loja} produtos = {[produto1, produto2, produto3, produto4, produto5]}/>
        render(element, document.getElementById("root"));

         function Content(props) {
            return(
               <main>
                  <h2> Camiseta Espacial</h2>
               </main>
               <section>
                   <div>
                       <img src="props.produto[0].img" alt="produto"/> 
                       <p>{props.produto[0].nome}</p>
                       <p> {props.produto[0].preço}</p>
                   </div>
               </section>
            )
         },
         
    </script>
</body>
}
export default App;
