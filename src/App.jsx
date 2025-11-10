import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import './App.scss';
import { useTheme } from './context/ThemeContext.jsx';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app app--${theme}`}>
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
