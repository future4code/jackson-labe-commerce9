import React from 'react';
import './App.css';
import styled from "styled-components";
import ContainerProduto from './components/ContainerProduto';
import Carrinho from './components/Carrinho';
import BotaoCarrinho from './components/BotaoCarrinho';
import Filtro from './components/Filtro';

const ContainerLoja = styled.div`
  width: 98vw;
  height: 98vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 16px;
`

export default class App extends React.Component {
  state = {
    listaDeProdutos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 11",
        value: 500.0,
        imageUrl: "https://picsum.photos/200/201",
      },
      {
        id: 3,
        name: "Foguete da Missão Apollo 11",
        value: 250.0,
        imageUrl: "https://picsum.photos/200/202",
      },
      {
        id: 4,
        name: "Foguete da Missão Apollo 11",
        value: 3000.0,
        imageUrl: "https://picsum.photos/200/203",
      },
      {
        id: 5,
        name: "Foguete da Missão Apollo 11",
        value: 5000.0,
        imageUrl: "https://picsum.photos/200/204",
      },
      {
        id: 6,
        name: "Foguete da Missão Apollo 11",
        value: 600.0,
        imageUrl: "https://picsum.photos/200/205",
      },
      {
        id: 7,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/206",
      },
      {
        id: 8,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/207"
      },
    ],

    carrinhoClick: false,
  }

  onClickBotaoCarrinho = () => {
    console.log("Clicou no botão do carrinho!");
    this.setState({
      carrinhoClick: !this.state.carrinhoClick
    });
  };


  render(){
  
    const produtos = this.state.listaDeProdutos.map((produtos) => {
      return (
        <ContainerProduto
          name={produtos.name}
          value={produtos.value}
          imageUrl={produtos.imageUrl}
        />
      )
    })


    const carrinhoClicado = this.state.carrinhoClick;
    
    if (!carrinhoClicado) {
      return (
        <ContainerLoja>
          <Filtro widthFiltro={"25%"} />
          <div onChange={this.onChangeCarrinho}>
            {produtos}
          </div>          
          > 
          <BotaoCarrinho onClickIcone={this.onClickBotaoCarrinho} />
        </ContainerLoja>
      );
    } else {
      return (
        <ContainerLoja>
          <Filtro widthFiltro={"18%"} />
          <div onChange={this.onChangeCarrinho}>
            {produtos}
          </div>
          <Carrinho />
          <BotaoCarrinho onClickIcone={this.onClickBotaoCarrinho} />
        </ContainerLoja>
      );
    }
  }
}