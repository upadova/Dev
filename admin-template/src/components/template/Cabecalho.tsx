import useAppData from "@/data/hook/useAppData"
import AlterarTema from "./AlterarTema"
import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string,
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
    const {tema, alterarTema} = useAppData();

    return (
        <div className={`flex flex-row`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-grow justify-end`}>
                <AlterarTema tema={tema} alterarTema={alterarTema}/>
            </div>
        </div>
    )
}