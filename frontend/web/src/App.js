import React, { useState, useEffect } from 'react';
import api from './services/api'
import './App.css';

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
    <div id="listaTarefas">
      <ul>
        {state.map(s => (
        <li key={s.id}>{s.nome}</li>
        ))}
      </ul>
    </div>
   </>
  );
}

export default App;
