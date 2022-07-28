import relogioStyle from "./Relogio.module.scss"
import { converterTempo } from "../../../commons/conversaoTempo";

interface Props {
    tempo: number | undefined
}

export default function Relogio({tempo = 0} : Props){
    
    const minutos = Math.floor(tempo / 60);
    const segundos = Math.floor(tempo % 60);
    const [minutosDezena,minutosUnidade] = String(minutos).padStart(2,"0");
    const [segundosDezena,segundosUnidade] = String(segundos).padStart(2,"0");
    console.log(minutos,segundos)

    return(
        <>
            <span className={relogioStyle.relogioNumero}>{minutosDezena}</span>
            <span className={relogioStyle.relogioNumero}>{minutosUnidade}</span>
            <span className={relogioStyle.relogioDivisao}>:</span>
            <span className={relogioStyle.relogioNumero}>{segundosDezena}</span>
            <span className={relogioStyle.relogioNumero}>{segundosUnidade}</span>
        </>
    )
}