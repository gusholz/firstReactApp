import React, { useState } from 'react';
import Botao from '../botao/Botao';  
import formularioStyle from './Formulario.module.scss';
import {ITarefas} from '../lista/Lista';
import { v4 as uuidv4 } from 'uuid';

export default function Formulario(props: {
    setTarefas : React.Dispatch<React.SetStateAction<ITarefas[]>>,
    tarefas : ITarefas[]

}): JSX.Element{
    
    const [value,setValue] = useState("");
    const [tempo,setTempo] = useState("");

    
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        //prevenir refresh 
        evento.preventDefault();
        //Adicionar nova Tarefa a array de tarefas
        props.setTarefas(tarefas =>
        {
            return [...tarefas,
            {
                tarefa: value,
                tempo: tempo,
                completado : false, 
                selecionado : false,
                id : uuidv4()
            }]
        })

        //resetar valores do formulário
        setValue("");
        setTempo("");
    }

    return(
        <form className={formularioStyle.novaTarefa} onSubmit={adicionarTarefa}> 
            <div className={formularioStyle.inputContainer}>
                <label htmlFor ="tarefa">

                </label>
                <input
                    type="text"
                    name="tarefa"
                    id = "tarefa"
                    placeholder="O que você quer estudar?"
                    value={value}
                    onChange={ e => {
                        setValue(e.target.value);
                    }}
                    required
                    autoFocus
                />
            </div>
            <div className={formularioStyle.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step ="1"
                    name="tempo"
                    value={tempo}
                    onChange={ e => {
                        setTempo(e.target.value);
                    }}
                    id = "tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao
                type = "submit"
                tarefa = "Adicionar"
            />
        </form>
    )
}
