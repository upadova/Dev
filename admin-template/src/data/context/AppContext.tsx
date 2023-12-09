'use client'
import { createContext, useState } from "react";

type Tema = 'dark' | '';

interface ContextProps {
    children: React.ReactNode
}

interface AppContextType {
    tema?: Tema,
    alterarTema?: () => void
}

const AppContext = createContext<AppContextType>({
    tema: 'dark',
});

export function AppProvider(props: ContextProps) {
    const [tema, setTema] = useState<Tema>('')
    const alterarTema = () => {
        setTema(tema === '' ? 'dark' : '');
    }

    return (
        <AppContext.Provider value={{
            tema,
            alterarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;
export const AppConsumer = AppContext.Consumer