import React from 'react'
import './style.css'


function Actions(){
    return(
        <>
           <div className="opcoes">
                <button className="s-dark">+</button>
                <button className="s-dark"><img src="./icons/editar.png" className="icons-opcoes" /></button>
                <button className="s-dark"><img src="./icons/excluir.png" className="icons-opcoes" /></button>

           </div>
        </>
    )
}

export default Actions