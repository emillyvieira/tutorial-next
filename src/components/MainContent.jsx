'use client'

import React, { useState } from 'react';


const MainContent = () => {

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [nome, setNome] = useState('Emilly');
  const [nome2, setNome2] = useState('...');
  const [contador, setContador] = useState(0); // Adicionando o estado contador

  return (


    <div className="main-content p-4 m-4 content-container">
      <p>Olá {nome2}!!!</p>
      <h2>Contador</h2>
      valor 1:
      <input
        type="number"
        value={valor1}
        onChange={(event) => setValor1(+event.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
        placeholder="Digite um número"
      />
      <br />
      valor 2:
      <input
        type="number"
        value={valor2}
        onChange={(event) => setValor2(+event.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
        placeholder="Digite um número"
      />

      <p>Resultado: {resultado}</p>
      <button className="border border-blue-500 text-blue-500 py-2 px-6 rounded-lg bg-transparent hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => {
          setResultado(valor1 + valor2)
          setContador(contador + 1)// Incrementa o contador toda vez que a soma é feita
          console.log(contador) // Aqui o contador será atualizado corretamente
        }}>Somar</button><br />
      <br />
      <input
        type="text"
        value={nome2}
        onChange={(event) => setNome2(event.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
        placeholder="Digite seu nome"
      />
      <br />
      <button className="border border-blue-500 text-blue-500 py-2 px-6 rounded-lg bg-transparent hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={() => setNome('Joana')}>Mudar Nome</button>

    </div>

  );
};

export default MainContent;
