import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-off-white text-purple-800">
      <Header />
      <div className="flex flex-1 p-4">
        <div className="w-1/4 mr-4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <h1>Contato</h1>
          <Link href="/">VOLTAR</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;