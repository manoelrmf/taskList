import React, { useState, useEffect} from 'react'
import api from '../../services/api'
import './style.css'
import BoxCard from '../BoxCard'




function Main(){
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
      listaTarefas()
      }, []);

      function listaTarefas(){
        async function loadTarefas(){
          const response = await api.get('/tarefas', {
            data: {},
          })
          console.log(response.data)
          setTarefas(response.data)
        }
        loadTarefas()
      }
    
      function excluir(e, id) {
        e.preventDefault();
        async function deleteTarefa(){
            const response = await api.delete('/tarefas/'+id, {
                data: {},
            })
            console.log(response)
            if (response.status == 204){
              listaTarefas()
            }
        }
        deleteTarefa()
    }

    return(
        <>
           <main>
                <div className="boxes">
                    {tarefas.map(task => (
                        <BoxCard key={task.id} task={task} handleDelete={excluir} />
                    ))}               
                 </div>
           </main>
        </>
    )
}

export default Main