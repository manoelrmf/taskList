import React from 'react'
import './style.css'

import Actions from '../Actions'

function BoxCard({ task, handleDelete }){
    return(
        <>
            <div className="box-card s-dark">
                <div className="text-title">
                    <input name="title" type="text" value={task.titulo} placeholder="Digite seu título" />
                </div>
                <div className="text-content">
                  <textarea name="text" type="text" value={task.txDescricao} placeholder="Descreva sua tarefa ..." rows="4" cols="40" />
                </div>
                <Actions id={task.id} handleDelete={handleDelete} />
            </div>
        </>
    )
}

export default BoxCard