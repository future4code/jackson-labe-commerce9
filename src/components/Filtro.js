import React from "react";
import styled from "styled-components";

const InputFiltro = styled.div`
  margin-bottom: 20px;
`;

const ContainerFiltro = styled.div`
  border: solid 2px black;
  width: ${(props) => props.width};
  height: 100%;

  padding: 5px;
`;

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

export default Filtro;