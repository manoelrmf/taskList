import React  from 'react'
import './style.css'
import api from '../../services/api'



function Actions({ id }){
    function excluir(e, id) {
        e.preventDefault();
        async function deleteTarefa(){
            const response =  api.delete('/tarefas/'+id, {
                data: {},
            })
            console.log(response)
        }
        deleteTarefa()
    }

    return(
        <>
           <div className="opcoes">
                <button className="s-dark">+</button>
                <button className="s-dark"><img src="./icons/editar.png" className="icons-opcoes" /></button>
                <button className="s-dark" onClick={(e) => excluir(e, id)} ><img src="./icons/excluir.png" className="icons-opcoes" /></button>
           </div>
        </>
    )
}

export default Actions