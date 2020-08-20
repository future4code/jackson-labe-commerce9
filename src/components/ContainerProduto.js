import React from 'react'
import styled from "styled-components";

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


class ContainerProduto extends React.Component {
    render() {
        return (
            <Produto>
                <ImagemProduto src={this.props.imageUrl} alt={"imagem do produto"} />
                <Texto>{this.props.name}</Texto>
                <Texto>{this.props.value}</Texto>
                <BotaoAdd>Adicionar ao Carrinho</BotaoAdd>
            </Produto>
        );
    }
}

export default ContainerProduto;