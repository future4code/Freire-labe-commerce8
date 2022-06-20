import React from 'react';
import styled from "styled-components";
import Home from "./components/Home/Home";
import Carrinho from './components/Carrinho/Carrinho';
import Form from "./components/Form/Form";

import  camiseta1 from './imgs/camiseta1.jpeg';
import  blusa3 from './imgs/blusa3.jpeg';
import  blusa4 from './imgs/blusa4.jpeg';
import  blusa5 from './imgs/blusa5.jpeg';
import  camisa from './imgs/camisa.jpeg';
import  camiseta2 from './imgs/camiseta2.jpeg';

const CardProduto = styled.div`
  height: 65vh;
  width: 18vw;
  padding: 0px 0px 20px 0px;
  box-shadow: 1px 1px 5px #1a1557;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  overflow: hidden;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 65vw;
  }
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const ImgProduto = styled.img`
  width: 100%;
  height: 75%;
`;
const Main = styled.div`
  background-color: #eae7e7;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Footer = styled.div`
  background-color: #7378A5;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: #7378A5;
    height: 16vh;
  }
`;

const ImgIcone = styled.img`
  height: 5vh;
  margin: 10px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 4vh;
    margin: 3px;
  }
`;


class App extends React.Component{
  state = {
    produtos: [
      {
        id: 1,
        name: "Camiseta Lunar",
        price: 80.0,
        imagemURL: <ImgProduto src={camiseta1}/>,
        quantidade: 1,
      },
      {
        id: 2,
        name: "Camiseta Galaxy",
        price: 76.0,
        imagemURL: <ImgProduto src={camiseta2}/>,
        quantidade: 1,
      },
      {
        id: 3,
        name: "Camiseta Planets",
        price: 89.0,
        imagemURL: <ImgProduto src={camisa}/>,
        quantidade: 1,
      },
      {
        id: 4,
        name: "Moletom Galaxy",
        price: 99.0,
        imagemURL: <ImgProduto src={blusa3}/>,
        quantidade: 1,
      },
      {
        id: 5,
        name: "Moletom Lobo Noturno",
        price: 120.0,
        imagemURL: <ImgProduto src={blusa4}/>,
        quantidade: 1,
      },
      {
        id: 6,
        name: "Moletom Lobo Místico",
        price: 110.0,
        imagemURL: <ImgProduto src={blusa5}/>,
        quantidade: 1,
      },
    ],

    filtro: "",
    query: "",
    busca:"",
    minPrice: "",
    maxPrice: "",
    order: 1,
    pagina: false,
    produtosNoCarrinho: [],
    adicionados: false,
    quantidadeProdutos: 0,
  };

  adicionaProduto = (produtoId) => {
    this.setState({
      adicionados: false,
      quantidadeProdutos: this.state.quantidadeProdutos + 1,
    });

    const prod = this.state.produtos.filter((p) => {
      return p.id === produtoId;
    });
    const novaProduto = prod[0];

    const novoProdutoIndex = this.state.produtosNoCarrinho.findIndex((p) => {
     return p.id === produtoId;
    }) 
    if (novoProdutoIndex === -1){
      const novoProdutoAdicionado = [
        ...this.state.produtosNoCarrinho,
        novaProduto,
      ];
      console.log(novoProdutoAdicionado)
      this.setState({ produtosNoCarrinho: novoProdutoAdicionado });
    } else { 
        const copiaCarrinho = [...this.state.produtosNoCarrinho]
        copiaCarrinho[novoProdutoIndex].quantidade++
        this.setState({ produtosNoCarrinho: copiaCarrinho });
    }

    
  };

  removerProduto = (id) => {
    const novosProdutosNoCarrinho = this.state.produtosNoCarrinho
      .map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({
      produtosNoCarrinho: novosProdutosNoCarrinho,
    });
  };

  renderizaCarrinho = () => {
    this.setState({ pagina: true });
  };

  renderizaPaginaFalse = () => {
    this.setState({ pagina: false });
  };

  updateQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  updateMinPrice = (event) => {
    this.setState({
      minPrice: event.target.value,
    });
  };

  updateMaxPrice = (event) => {
    this.setState({
      maxPrice: event.target.value,
    });
  };
  updateOrder = (event) => {
    this.setState({
      order: event.target.value,
    });
  };

  render() {
    let componenteCarrinho;

    if (this.state.adicionados) {
      componenteCarrinho = this.adicionaProduto;
    }

    if (this.state.pagina) {
      return (
        <Carrinho
          produtos={this.state.produtosNoCarrinho}
          removerProduto={this.removerProduto}
          renderizaPaginaFalse={this.renderizaPaginaFalse}
        />
      );
    }

    const novoArrayDeProdutos = this.state.produtos
      .filter((prod) => {
        return prod.name.toLowerCase().includes(this.state.query.toLowerCase());
      })
      .filter((prod) => {
        return this.state.minPrice === "" || prod.price >= this.state.minPrice;
      })
      .filter((prod) => {
        return this.state.maxPrice === "" || prod.price <= this.state.maxPrice;
      })
      .sort((cres, dec) => {
        return this.state.order * (cres.price - dec.price);
      })
      .map((produto) => {
        return (
          <CardProduto>
            {produto.imagemURL}
            <p>{produto.name}</p>
            <p>R${produto.price},00</p>
            <button onClick={() => this.adicionaProduto(produto.id)}>
              Adicionar ao carrinho
            </button>
          </CardProduto>
        );
      });

    return (
      <div>
        <Home
          query={this.state.query}
          updateQuery={this.updateQuery}
          minPrice={this.state.minPrice}
          updateMinPrice={this.updateMinPrice}
          maxPrice={this.state.maxPrice}
          updateMaxPrice={this.updateMaxPrice}
          order={this.state.order}
          updateOrder={this.updateOrder}
          renderizaCarrinho={this.renderizaCarrinho}
          quantidadeProdutos={this.state.quantidadeProdutos}
        ></Home>
        <Main>{novoArrayDeProdutos}</Main>

        <Footer>
                 
          <h2>Siga-nos nas redes sociais:</h2>
          <div>
            <ImgIcone src="/img/Facebook.png"/>
            <ImgIcone src="/img/Instagram.png"/>
            <ImgIcone src="/img/Twitter.png"/>
          </div>
        </Footer>
      </div>
    );
  }
}
export default App;





          
          