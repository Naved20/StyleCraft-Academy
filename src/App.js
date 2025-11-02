import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';
import Footer from './components/Footer';
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'services': return <ServicesPage />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;