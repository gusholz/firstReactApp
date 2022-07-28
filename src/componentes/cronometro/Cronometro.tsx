import Botao from "../botao/Botao";
import Relogio from "./relogio/Relogio";
import cronometroStyle from "./Cronometro.module.scss"
import { converterTempo } from "../../commons/conversaoTempo";
import { ITarefas } from "../lista/Lista";
import { useEffect, useState } from "react";


interface Props {
    selecionado: ITarefas | undefined ;
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado,finalizarTarefa}:Props){
    const [tempo,setTempo] = useState<number>();

    function decrementadorTempo(contador:number = 0){
        setTimeout(()=>{
            if(contador>0){
                setTempo(contador-1);
                return decrementadorTempo(contador-1)
            }
            finalizarTarefa()
        },1000);
    }

    useEffect(()=>{
        if(selecionado?.tempo) {
            setTempo(converterTempo(selecionado.tempo));
           }
    },[selecionado])

    return(
        <div className={cronometroStyle.cronometro}>
            <p className={cronometroStyle.titulo}>Escolha uma Atividade</p>
            <div className={cronometroStyle.relogioWrapper}>
                <Relogio tempo ={tempo}/>
            </div>
            <Botao
                onClick ={()=>{
                    decrementadorTempo(tempo)
                }}
                type="button"
                tarefa="Começar"
            />
        </div>
    )
}