import React, { useState, useEffect } from 'react';
import api from './services/api'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

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
    <Header />
    <Main />
    <Footer />
   </>
  );
}

export default App;
