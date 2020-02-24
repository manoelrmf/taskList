import React  from 'react'
import './style.css'
import api from '../../services/api'



function Actions({ id, handleDelete }){
   
    function renderBtnAdd(id){
        if(id == undefined){
            return <button className="s-dark" >+</button>
        }
    }
   
    return(
        <>
           <div className="opcoes">
                {renderBtnAdd(id)}
                <button className="s-dark"><img src="./icons/editar.png" className="icons-opcoes" /></button>
                <button className="s-dark" onClick={(e) => handleDelete(e,id)} ><img src="./icons/excluir.png" className="icons-opcoes" /></button>
           </div>
        </>
    )
}

export default Actions