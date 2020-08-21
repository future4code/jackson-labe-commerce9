import React from "react";
import styled from "styled-components";
import ContainerProduto from './ContainerProduto'
import App.js

const ContainerCarrinho = styled.div`
  border: solid 2px black;
  width: 18%;
  height: 100%;

  padding: 5px;
`;

export default class Carrinho extends React.Component {
  
  adicionarCarrinho = () => { 
  
  state = {

    arrayCarrinho: [
      {
        NomeProduto: "",
        valorProduto: "",
      }],
    
    //nomeInputProduto: "",
    //valorInputProduto: ""
  };

  adicionaProduto = () => { 
  
     const novoProduto = {
       
       Nome: this.state.NomeProduto,
       Valor: this.state.valorProduto
     };

   
     const novosProdutos = [...this.state.arrayCarrinho, novoProduto];
     this.setState({ arrayCarrinho: novosProdutos})
    }
  }

  render() {
    return (
      <ContainerCarrinho>
        <h2>Carrinho:</h2>
        <span>Total:</span>
        <span>{}</span>
      </ContainerCarrinho>
    );
  }
  }
