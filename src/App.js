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
const ContainerCarrinho = styled.div`
  border: solid 2px black;
  width: 18%;
  height: 100%;

  padding: 5px;
`;

const Produto = styled.div`


  border: dashed 1px orange;
  padding: 5px;

  display:flex;
  flex-direction: column;
  justify-content:space-around;
`;

const ImagemProduto = styled.img`
  width: 100%;
  height: 60%;
`;

const Texto = styled.p`
  height: 15px;
`;

const BotaoAdd = styled.button`
  width: 100%;
  height: 5vh;
  background-color: black;
  color: white;
  border: none;
  outline: none;
`;

const InputFiltro = styled.div`
  margin-bottom: 20px;
`;

const ContainerFiltro = styled.div`
  border: solid 2px black;
  width: ${(props) => props.width};
  height: 100%;

  padding: 5px;
`;

const ContainerBotaoCarrinho = styled.button`
  background-color: white;
  border: solid 2px white;
  border-radius: 50%;
  outline: none;

  position: fixed;
  right: 20px;
  bottom: 20px;

  width: 80px;
  height: 80px;
  padding: 10px;
`;

const Icone = styled.img`
  width: 80%;
  height: 80%;

  opacity: 80%;
`;

class ContainerProduto extends React.Component {
  render() {
      return (
          <Produto>
              <ImagemProduto src={this.props.imageUrl} alt={"imagem do produto"} />
              <Texto>{this.props.name}</Texto>
              <Texto>{this.props.value}</Texto>
              <button onClick={()=>this.props.funcaoAdd(this.props.id)}>Adicionar ao Carrinho</button>
          </Produto>
      );
  }
}

class Carrinho extends React.Component {
  
  render() {
    return (
      <ContainerCarrinho>
        <h2>Carrinho:</h2>
        <p>{this.props.name}</p>
        <span>Total:</span>

        <span>{}</span>
      </ContainerCarrinho>
    );
  }
  }

class Filtro extends React.Component {

  
  render() {
    return (
      <ContainerFiltro width={this.props.widthFiltro}>
        <h2>Filtros:</h2>
        <InputFiltro>
          <label>Valor Mínimo:</label>
          <input type="number" />
        </InputFiltro>
        <InputFiltro>
          <label>Valor Máximo:</label>
          <input type="number" />
        </InputFiltro>
        <InputFiltro>
          <label>Buscar Produto</label>
          <input type="text" />
        </InputFiltro>
      </ContainerFiltro>
    );
  }
}

class BotaoCarrinho extends React.Component {
  render() {
    return (
      <ContainerBotaoCarrinho onClick={this.props.onClickIcone}>
        <Icone
          src={"https://image.flaticon.com/icons/svg/126/126510.svg"}
          alt={"Icone carrinho"}
        />
      </ContainerBotaoCarrinho>
    );
  }
}

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
  
           
        
          <Carrinho/>
            
          
          
          <BotaoCarrinho onClickIcone={this.onClickBotaoCarrinho} />
        </ContainerLoja>
      );
    }
  }
}