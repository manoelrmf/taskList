import React from 'react'
import './style.css'

import Actions from '../Actions'

function BoxCard({ title }){
    return(
        <>
            <div className="box-card s-dark">
                <div className="text-title">
                    <input name="title" type="text" value={title} placeholder="Título" />
                </div>
                <div className="text-content">
                  <textarea name="text" type="text" placeholder="Descreva sua tarefa ..." rows="4" cols="40" />
                </div>
                <Actions />
            </div>
        </>
    )
}

export default BoxCard