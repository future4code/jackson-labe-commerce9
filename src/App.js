import React from 'react';
import './App.css';
import ContainerProduto from './components/ContainerProduto';
import Filtro from './components/Filtro';

class App extends React.Component() {
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
        imageUrl: "https://picsum.photos/200/207",
    },
    ]
}
 
 
 render(){
  return (
  <ContainerProduto
   listaDeProdutos id="1"
  
  />
    
    
  )};
}

export default App;
