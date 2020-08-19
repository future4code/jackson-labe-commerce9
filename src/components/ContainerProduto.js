import React from 'react'



class ContainerProduto extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.imageURL} />
                <p>{this.props.name}</p>
                <p>{this.props.value}</p>
                <button>Adicionar ao Carrinho</button>
            </div>
        );
    }
}

export default ContainerProduto;