import React, { useState, useEffect} from 'react'
import './style.css'

import dataUtils from '../../utils/dataUtils'
import Actions from '../Actions'

function BoxCard({ task, handleDelete, handleEditTask, onSubmit }){
    const [titulo, setTitulo] = useState('')
    const [txDescricao, setTxDescricao] = useState('')
    const [dataInicio, setDataInicio] = useState()

    useEffect(() => {
        setTitulo(task.titulo)
        setTxDescricao(task.txDescricao)
        setDataInicio((task.dataInicio == null) ? dataUtils() : task.dataInicio)
    }, []);

    async function handleSubmit(e){
        e.preventDefault()
        await onSubmit({
            titulo: titulo,
            txDescricao: txDescricao,
            inStatus: 0,
            dataInicio: dataInicio,
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

      async function handleEditar(e, id){
        e.preventDefault()
        var data = {
            titulo: titulo,
            txDescricao: txDescricao,
            inStatus: 0,
            dataInicio: dataInicio,
            dataFinal: "25/02/2020",
            usuario: {
                    id: 1,
                    nome: "Manoel Ribeiro",
                    txLogin: "admin",
                    txSenha: "admin",
                    dataNascimento: "18/07/2000",
                    dataCadastro: "23/02/2020"
            }
        }
        handleEditTask(data, id)
      }
    
    return(
        <>
            <div className="box-card s-dark">
                <form onSubmit={handleSubmit} method="POST">
                    <div className="text-title">
                        <input name="title" type="text" value={titulo}  onChange={e => setTitulo(e.target.value)}  placeholder="Digite seu título" />
                    </div>
                    <div className="text-content">
                    <textarea name="text" type="text" value={txDescricao}  onChange={e => setTxDescricao(e.target.value)} placeholder="Descreva sua tarefa ..." rows="4" cols="40" />
                    </div>
                    <Actions id={task.id} handleDelete={handleDelete} handleEditar={handleEditar} />
                </form>
            </div>
        </>
    )
}

export default BoxCard