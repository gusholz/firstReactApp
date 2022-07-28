import Item from "./item/Item";
import listaStyle from "./Lista.module.scss"


export interface ITarefas {
  tarefa : string ,
  tempo: string ,
  completado : boolean,
  selecionado : boolean,
  id : string
}

interface Props {
  tarefas: ITarefas[],
  selecionarTarefa: (tarefaSelecionada: ITarefas) => void

}

export default function Lista({ tarefas, selecionarTarefa }: Props): JSX.Element {
  
  return (
    <aside className={listaStyle.listaTarefas}>
      <h2>Tarefas do dia</h2>
      <ul>
        {tarefas.map((item) => (
         <Item
            selecionarTarefa = {selecionarTarefa}
            key={item.id}
            {...item}
         />
        ))}
      </ul>
    </aside>
  )
}