import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import ElchiDetail from './components/ElchiDetail';
import ClusteryeDetail from './components/ClusteryeDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/elchi') {
      setCurrentPage('elchi');
    } else if (path === '/clustereye') {
      setCurrentPage('clustereye');
    } else {
      setCurrentPage('home');
    }

    // Handle browser back/forward
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/elchi') {
        setCurrentPage('elchi');
      } else if (path === '/clustereye') {
        setCurrentPage('clustereye');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Intercept link clicks
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href') === '/elchi') {
        e.preventDefault();
        window.history.pushState({}, '', '/elchi');
        setCurrentPage('elchi');
      } else if (target && target.getAttribute('href') === '/clustereye') {
        e.preventDefault();
        window.history.pushState({}, '', '/clustereye');
        setCurrentPage('clustereye');
      } else if (target && target.getAttribute('href') === '/') {
        e.preventDefault();
        window.history.pushState({}, '', '/');
        setCurrentPage('home');
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {currentPage === 'elchi' ? (
          <ElchiDetail />
        ) : currentPage === 'clustereye' ? (
          <ClusteryeDetail />
        ) : (
          <>
            <Hero />
            <Products />
            <Services />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
