import React, { useState, useEffect} from 'react'
import './style.css'

import Actions from '../Actions'

function BoxCard({ task, handleDelete, onSubmit }){
    const [titulo, setTitulo] = useState('')
    const [txDescricao, setTxDescricao] = useState('')

    useEffect(() => {
        if(task !== undefined){
            setTitulo(task.titulo)
            setTxDescricao(task.txDescricao)
        }
    }, []);

    async function handleSubmit(e){
        e.preventDefault()
        await onSubmit({
            titulo: titulo,
            txDescricao: txDescricao,
            inStatus: 0,
            dataInicio: "23/02/2020",
            dataFinal: "25/02/2020",
            usuario: {
                    id: 1,
                    nome: "Manoel Ribeiro",
                    txLogin: "admin",
                    txSenha: "admin",
                    dataNascimento: "18/07/2000",
                    dataCadastro: "23/02/2020"
            }
        })

        setTitulo('')
        setTxDescricao('')
      }
    
    return(
        <>
            <div className="box-card s-dark">
                <form onSubmit={handleSubmit}>
                    <div className="text-title">
                        <input name="title" type="text" value={titulo}  onChange={e => setTitulo(e.target.value)}  placeholder="Digite seu título" />
                    </div>
                    <div className="text-content">
                    <textarea name="text" type="text" value={txDescricao}  onChange={e => setTxDescricao(e.target.value)} placeholder="Descreva sua tarefa ..." rows="4" cols="40" />
                    </div>
                    <Actions id={task.id} handleDelete={handleDelete} />
                </form>
            </div>
        </>
    )
}

export default BoxCard