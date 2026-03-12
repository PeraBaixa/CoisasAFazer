import {useState} from "react"
import "./CoisasAFazer.css"

export const CoisasAFazer = () => {

    const addItens = () => {
        let topico = document.createElement("li")
        topico.innerHTML = document.getElementsByTagName("input")[0].value
        document.getElementsByTagName("ul")[0].append(topico)
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
            </ul>
        </div>
    )
}