import React from 'react';
import './App.css';
import styled from "styled-components";


const ContainerLoja = styled.div`
  width: 98vw;
  height: 98vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 16px;
`
const SecaoProdutos = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  padding: 5px 15px;
`
const Header = styled.div`
  height: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OpcoesPreco = styled.select`
  width: 200px;
  height: 20px;
`;

const ListaProdutos = styled.div`  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px 10px;

  width: 100%;
  height: 95%;
`


export default class App extends React.Component {
  state = {

    carrinho: [],

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


  
  adicionarCarrinho = (id) => { 
      console.log('oi')
      const novoCarrinho = this.state.carrinho;

      const novoArrayCarrinho = this.state.listaDeProdutos.filter((produto) => {
        if (id === produto.id) {
          return produto;
          

        }
      });
  

  
     const novosProdutos = [...this.state.carrinho, novoArrayCarrinho[0]]
     console.log(novosProdutos)
     this.setState({ carrinho: novosProdutos})
     
     
  };
  
  render(){
  
    const produtos = this.state.listaDeProdutos.map((produtos) => {
      
      return (
        <ContainerProduto
        name={produtos.name}
          value={produtos.value}
          imageUrl={produtos.imageUrl}
          id={produtos.id}
          funcaoAdd={this.adicionarCarrinho}
          />
          
        
        
      )
    })


    const carrinhoClicado = this.state.carrinhoClick;
    
    if (!carrinhoClicado) {
      return (
        <ContainerLoja>
          <Filtro widthFiltro={"25%"} />
          <SecaoProdutos 
            onChange={this.onChangeCarrinho}
            width={"75%"}
          >
            <Header>
              <p>Quantidade de produtos:</p>
              <OpcoesPreco>
                <option>Preço: crescente</option>
                <option>Preço: decrescente</option>
              </OpcoesPreco>
            </Header>
            <ListaProdutos>{produtos}</ListaProdutos>
          </SecaoProdutos>     
          <BotaoCarrinho onClickIcone={this.onClickBotaoCarrinho} />
        </ContainerLoja>
      );
    } else {
      return (
        <ContainerLoja>
          <Filtro widthFiltro={"18%"} />
          <SecaoProdutos 
            onChange={this.onChangeCarrinho} 
            width={"60%"}
          >
            <Header>
              <p>Quantidade de produtos:</p>
              <OpcoesPreco>
                <option>Preço: crescente</option>
                <option>Preço: decrescente</option>
              </OpcoesPreco>
            </Header>
            <ListaProdutos>{produtos}</ListaProdutos>
          </SecaoProdutos>

          <Carrinho />

          <BotaoCarrinho onClickIcone={this.onClickBotaoCarrinho} />
        </ContainerLoja>
      );
    }
  }
}