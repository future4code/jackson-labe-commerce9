import React from 'react';
import './App.css';
import ContainerProduto from './components/container-produto';

class App extends React.Component() {
  state = {
    listaDeProdutos: [
        {
            id: 1,
            name: "Foguete da Missão Apollo 11",
            value: 10000.0,
            imageUrl: "https://picsum.photos/200/200",
        };
        {
          id: 2,
          name: "Foguete da Missão Apollo 11",
          value: 500.0,
          imageUrl: "https://picsum.photos/200/201",
        };
        {
          id: 3,
          name: "Foguete da Missão Apollo 11",
          value: 250.0,
          imageUrl: "https://picsum.photos/200/202",
        };
        {
          id: 4,
          name: "Foguete da Missão Apollo 11",
          value: 3000.0,
          imageUrl: "https://picsum.photos/200/203",
       };
       {
        id: 5,
        name: "Foguete da Missão Apollo 11",
        value: 5000.0,
        imageUrl: "https://picsum.photos/200/204",
       };
       {
        id: 6,
        name: "Foguete da Missão Apollo 11",
        value: 600.0,
        imageUrl: "https://picsum.photos/200/205",
       };
       {
        id: 7,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/206",
    };
      {
        id: 8,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/207",
    };
    ]
}
 
 
 
  return (
    <div className="App">
     <ContainerProduto
     id=1
     >
     <ContainerProduto
     id=2
     >
     <ContainerProduto
     id=3
     >
     <ContainerProduto
     id=4
     >
     <ContainerProduto
     id=5
     >
     <ContainerProduto
     id=6
     >
     <ContainerProduto
     id=7
     >
     <ContainerProduto
     id=8
     >
    </div>
  );
}

export default App;
