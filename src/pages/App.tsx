import Cronometro from '../componentes/cronometro/Cronometro';
import Formulario from '../componentes/formulario/Formulario'
import Lista, { ITarefas } from '../componentes/lista/Lista';
import appStyle from "./App.module.scss";
import { useState } from 'react';

export default function App(): JSX.Element {
  const [tarefas, setTarefas] = useState<ITarefas[] >([]);
  const [selecionado,setSelecionado] = useState<ITarefas>();

  function selecionarTarefa(tarefaSelecionada: ITarefas){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
  
    })));
  }


  function finalizarTarefa() {
    if(selecionado) {
        setSelecionado(undefined);
        setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
            if(tarefa.id === selecionado.id) {
                return {
                    ...tarefa,
                    selecionado: false,
                    completado: true
                }
            }
            return tarefa;
        }))
    }
}

  return (
    <div className={appStyle.AppStyle}>
      <Formulario 
        setTarefas={setTarefas}
        tarefas={tarefas}
      />
      <Lista 
        tarefas={tarefas}
        selecionarTarefa = {selecionarTarefa}
      />
      <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

