import botaoStyle from "./botao.module.scss"

type botaoProps = {
    tarefa : string ,
    type :  'submit' | 'reset' | 'button' | undefined,
    onClick?: () => void
}

export default function Botao({tarefa,type,onClick}:botaoProps): JSX.Element {
    const tipo = "submit"
    const tipo2 = onClick;
    return (
        <button type={tipo} onClick={tipo2} className={botaoStyle.botao}>
            {tarefa}
        </button>
    );
}
