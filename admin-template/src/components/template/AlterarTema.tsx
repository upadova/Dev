'use client'
import { IconeSol } from "../icons"

type Tema = 'dark' | '' | undefined;

interface AlterarTemaProps{
    tema: Tema,
    alterarTema?: ()=>void
}

export default function AlterarTema(props: AlterarTemaProps){
    return props.tema === 'dark' ? (
        <div onClick={props.alterarTema} className={``}>
            <div className={`bg-slate-600`}>
                {IconeSol}
            </div>
            <span >
                Claro
            </span>
        </div>
    ):(
        <></>
    )
}