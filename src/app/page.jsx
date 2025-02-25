'use client'
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import Link from 'next/link';

function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [nome, setNome] = useState('Emilly');
  const [nome2, setNome2] = useState('Novo nome...');
  const [contador, setContador] = useState(0); // Adicionando o estado contador

  console.log("Carregando...");

  return (
    <div className="App flex flex-col min-h-screen bg-off-white text-black">
      <Header />
      <div className="flex flex-1 p-4">
        <div className="w-1/4 mr-4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <MainContent />

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
