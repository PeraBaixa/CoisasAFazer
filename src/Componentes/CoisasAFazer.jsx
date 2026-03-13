import {useState} from "react"
import "./CoisasAFazer.css"

export const CoisasAFazer = () => {
    const [tarefas, mudaLista] = useState([])

    const addItens = () => {
        let topico = document.getElementsByTagName("input")[0].value
        mudaLista([...tarefas, topico])
        document.getElementsByTagName("input")[0].value = ""
    }

    return (
        <div id="container">
            <h2>Lista de Afazeres</h2>
            <div>
                <input
                    type = "text"
                    placeholder = "Adicione uma tarefa"
                />
                <button onClick={addItens}>Adicionar</button>
            </div>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}