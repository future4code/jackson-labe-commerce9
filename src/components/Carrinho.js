import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  border: solid 2px green;
  width: 18%;
  height: 100%;

  padding: 5px;
`;

class Carrinho extends React.Component {
  render() {
    return (
      <ContainerCarrinho>
        <h2>Carrinho:</h2>
        <span>Total:</span>
        <span>{}</span> /* deixei esse span como espera para entrar o valor total da compra */
      </ContainerCarrinho>
    );
  }
}

export default Carrinho;
