import React  from 'react'
import './style.css'

function Actions({ id, handleDelete, handleEditar }){
   
    function renderBtnAdd(id){
        if(id == undefined){
            return <button className="s-dark" type="submit" >+</button>
        }else {
            return (
                <>
                 <button className="s-dark" onClick={(e) => handleEditar(e,id)}><img src="./icons/editar.png" className="icons-opcoes" /></button>
                 <button className="s-dark" onClick={(e) => handleDelete(e,id)} ><img src="./icons/excluir.png" className="icons-opcoes" /></button> 
                </>
            )
        }


    }

    
   
    return(
        <>
           <div className="opcoes">
                {renderBtnAdd(id)}
                
           </div>
        </>
    )
}

export default Actions