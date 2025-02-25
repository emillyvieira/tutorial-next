'use client'
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

function App() {
  const [contador, setContador] =  useState(3)

  console.log("Carregando...")
  
  return (
    <div className="App flex flex-col min-h-screen bg-off-white text-purple-800">
      <Header />
      <div className="flex flex-1 p-4">
        <div className="w-1/4 mr-4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <MainContent />
          <h2>Contador</h2>
          <p>{contador}</p>
          <button className='border p-2 ' onClick={() => {
            setContador(contador + 1 ) 
            console.log(contador)
          }}>+1</button>

        </div>
      </div>
      <Footer />

    </div>
  );
}

export default App;
