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
            if (response.status == 204){
              listaTarefas()
            }
        }
        deleteTarefa()
    }

    async function handleAddTask(data){
      console.log(data)
      const response = await api.post('/tarefas', data)
      if(response.status == 201){
        listaTarefas()
      }
    }

    const novaTarefa = {

    }
    return(
        <>
           <main>
                <div className="boxes">
                    <BoxCard task={novaTarefa} onSubmit={handleAddTask} />
                    {tarefas.map(task => (
                        <BoxCard key={task.id} task={task} handleDelete={excluir}  />
                    ))}               
                 </div>
           </main>
        </>
    )
}

export default Main