import React from "react";
import styled from "styled-components";


const Img = styled.img`
  height: 12vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

const ImgCart = styled.img`
  height: 5vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  background-color: #7378A5;
  padding: 0px 20px 0px 20px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 10px;
  }
`;

const ButtonEContador = styled.div`
  display: flex;
`;

const ButtonCart = styled.button`
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: #7378A5;
  border: none;
`;
const Contador = styled.p`
  display: block;
  position: absolute;
  top: -4px;
  right: 1px;
  width: 20px;
  height: 20px;
  background: #e30001;
  text-align: center;
  border-radius: 50%;
  font-size: 15px;
  margin-right: 10px;
`;

const InputBusca = styled.input`
  display: flex;
  margin: 10px;
  width: 30vw;
  height: 2.8vh;
  background-color: #eae7e7;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  border-bottom: 1px solid black;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-left: 0%;
  }
  ::placeholder {
    margin-right: 5px;
    padding: 5px  ;
    
  }
`;

const InputsPrice = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #eae7e7;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const InputMinMax = styled.input`
  margin: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  border-bottom: 1px solid black;
  background-color: #eae7e7;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    justify-content: center;
    margin: 0;
  }
`;

const Order = styled.select`
  margin: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  border-bottom: 1px solid black;
  background-color: #eae7e7;
`;

class Home extends React.Component {
  render() {
    let valorContador = this.props.quantidadeProdutos;
    return (
      <div>
        <Header>
          <Img src="/img/logotipo.png"/>
          <h1>Shirts Store</h1>
         
          <a href="#">Contato</a>
           
          <ButtonEContador>
            <Contador>{valorContador}</Contador>
            <ButtonCart onClick={this.props.renderizaCarrinho}>
              <ImgCart src="/img/carrinho.png"/>
            </ButtonCart>
          </ButtonEContador>
        </Header>
        <InputsPrice>
          <div>
            <InputBusca           
             placeholder="Buscar"
             value={this.props.query}
             onChange={this.props.updateQuery}
            />
            <InputMinMax
              type="number"
              placeholder="Preço Minimo"
              value={this.props.minPrice}
              onChange={this.props.updateMinPrice}
            />
            <InputMinMax
              type="number"
              placeholder="Preço Máximo"
              value={this.props.MaxPrice}
              onChange={this.props.updateMaxPrice}
            />
          </div>
          <div>
            <label for="sort">Ordenação:</label>
            <Order
              name="order"
              value={this.props.order}
              onChange={this.props.updateOrder}
            >
              <option value={1}>Menor Preço</option>
              <option value={-1}>Maior Preço</option>
            </Order>
          </div>
        </InputsPrice>
      </div>
    );
  }
}
export default Home;


 
    