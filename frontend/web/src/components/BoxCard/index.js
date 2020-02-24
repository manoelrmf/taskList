import React, { useState, useEffect} from 'react'
import './style.css'

import Actions from '../Actions'

function BoxCard({ task, handleDelete }){
    const [titulo, setTitulo] = useState('')
    const [txDescricao, setTxDescricao] = useState('')

    useEffect(() => {
        if(task !== undefined){
            setTitulo(task.titulo)
            setTxDescricao(task.txDescricao)
        }
    }, []);
  
       

    return(
        <>
            <div className="box-card s-dark">
                <div className="text-title">
                    <input name="title" type="text" value={titulo}  onChange={e => setTitulo(e.target.value)}  placeholder="Digite seu título" />
                </div>
                <div className="text-content">
                  <textarea name="text" type="text" value={txDescricao}  onChange={e => setTxDescricao(e.target.value)} placeholder="Descreva sua tarefa ..." rows="4" cols="40" />
                </div>
                <Actions id={task.id} handleDelete={handleDelete} />
            </div>
        </>
    )
}

export default BoxCard