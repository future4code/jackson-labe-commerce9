import React from "react";
import styled from "styled-components";

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

export default BotaoCarrinho;