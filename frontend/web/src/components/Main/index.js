import React, { useState, useEffect} from 'react'
import api from '../../services/api'
import './style.css'
import BoxCard from '../BoxCard'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import uuid from 'uuid/v4'

let columnsFromBackend =
  {
    [uuid()]: {
      tipo: 0,
      name: 'A fazer',
      items: []
    },
    [uuid()]: {
      tipo: 1,
      name: 'Em andamento',
      items: []
    },
    [uuid()]: {
      tipo: 2,
      name: 'Concluído',
      items: []
    }
  }

const onDragEnd = (result, colunas, setColunas) => {
  if(!result.destination) return;
  const { source, destination } = result
  if(source.droppableId !== destination.droppableId){
    const sourceColumn = colunas[source.droppableId]
    const destColumn = colunas[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0 ,removed)
    setColunas({
      ...colunas,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  }else{
    const coluna = colunas[source.droppableId]
    const copiedItems = [...coluna.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColunas({
      ...colunas,
      [source.droppableId]: {
        ...coluna,
        items: copiedItems
      }
    })
  }
 
}

function Main(){
    const [colunas, setColunas] = useState([]);
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
      listaTarefas()
      setColunas(columnsFromBackend)

    }, []);

      function listaTarefas(){
        async function loadTarefas(){
          const response = await api.get('/tarefas', {
            data: {},
          })
          setTarefas(response.data)


          for (var [key, value] of Object.entries(response.data)) {
            Object.assign(response.data[key], { uid: uuid() })
          }
          console.log('antes')
          console.log(columnsFromBackend)
          for (var [key, value] of Object.entries(columnsFromBackend)) {
            if(value.tipo == 0){
              setColunas(columnsFromBackend)
              value.items = response.data
            }
          }
          console.log("despos")
          console.log(columnsFromBackend)
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

    function editar(data, id) {
      async function editarTarefa(){
          const response = await api.put('/tarefas/'+id, data)
          console.log(response)
      }
      editarTarefa()
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
                    <DragDropContext onDragEnd={result => onDragEnd(result, colunas, setColunas)}>
                        {Object.entries(colunas).map(([id, coluna]) => {
                          return (
                            <div className="box-style s-dark">
                              <h3>{coluna.name}</h3>
                              <div style={{margin: 8}}>
                              <Droppable droppableId={id} key={id} style={{margin: 8}}>
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      {...provided.droppableProps}
                                      ref={provided.innerRef}
                                      style={{
                                        background: snapshot.isDraggingOver ? '#222424' : '#222424',
                                        padding: 4,
                                        width: 350,
                                        minHeight: 500
                                      }}
                                    >
                                      {coluna.items.map((item, index) => {
                                        return (
                                          <Draggable key={item.uid} draggableId={item.uid} index={index} className="s-dark">
                                            {(provided, snapshot) => {
                                              return (
                                                <div  className="box-card s-dark" 
                                                  ref={provided.innerRef}
                                                  {...provided.draggableProps}
                                                  {...provided.dragHandleProps}
                                                  style={{
                                                    userSelect: 'none',
                                                    backgroundColor: snapshot.isDragging ? '#222424' : '#222424',
                                                    ...provided.draggableProps.style
                                                  }}
                                                >
                                                    <BoxCard key={item.id} task={item} handleDelete={excluir} handleEditTask={editar}  />
                                                 </div>
                                              )
                                            }}
                                          </Draggable>
                                        )
                                      })}
                                      {provided.placeholder}
                                    </div>
                                  )
                                }}
                            </Droppable>
                            </div>
                            </div>
                          )
                        } )}
                    </DragDropContext>     
                 </div>
           </main>
        </>
    )
}

export default Main