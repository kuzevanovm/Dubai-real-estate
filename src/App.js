// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home'; // Импортируем компонент главной страницы
import Buy from './pages/Buy';   // Импортируем страницу Buy
import About from './pages/About'; // Импортируем страницу About
import Contact from './pages/Contact'; // Импортируем страницу Contact

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Главная страница (по умолчанию) */}
          <Route path="/" element={<Home />} />
          {/* Другие страницы */}
          <Route path="/HOME" element={<Home />} />
          <Route path="/BUY" element={<Buy />} />
          <Route path="/ABOUT" element={<About />} />
          <Route path="/CONTACT" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

