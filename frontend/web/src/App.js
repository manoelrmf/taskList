import React, { useState, useEffect } from 'react';
import api from './services/api'
import './App.css';
import Footer from './components/Footer';

function App() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    async function loadTarefas(){
      const response = await api.get('/usuarios', {
        data: {},
      })
      console.log(response.data)
      setstate(response.data)
    }

    loadTarefas()
  }, []);

  return (
   <>
    <header></header>
    <main></main>
    <Footer />
   </>
  );
}

export default App;
