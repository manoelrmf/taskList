import React, { useState, useEffect} from 'react'
import api from '../../services/api'
import './style.css'
import BoxCard from '../BoxCard'




function Main(){
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        async function loadTarefas(){
          const response = await api.get('/tarefas', {
            data: {},
          })
          console.log(response.data)
          setTarefas(response.data)
        }
    
        loadTarefas()
      }, []);
    
    
    return(
        <>
           <main>
                <div className="boxes">
                    {tarefas.map(task => (
                        <BoxCard key={task.id} task={task} />
                    ))}               
                 </div>
           </main>
        </>
    )
}

export default Main