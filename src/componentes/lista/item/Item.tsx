import style from './Item.module.scss';
import { ITarefas } from '../Lista'


interface props extends ITarefas{
    selecionarTarefa: (tarefaSelecionada: ITarefas) => void
}


export default function Item({ 
        tarefa,
        tempo, 
        selecionado,
        completado, 
        id, 
        selecionarTarefa
    }: props): JSX.Element{
        return(
            <li 
                className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
                onClick ={() => !completado && selecionarTarefa({
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                })}
            >
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
                {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
            </li>
        )
}

