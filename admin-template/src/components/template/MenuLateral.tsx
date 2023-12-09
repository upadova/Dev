'use client'
import MenuItem from "./MunuItem";
import Logo from "./Logo";
import { IconeHome, IconeAjustes, IconeSino, IconeLogout } from '../icons/index'


export default function MenuLateral() {
    return (
        <aside className="flex flex-col dark:bg-gray-900 dark:text-gray-200">
            <div className="
            flex flex-col items-center justify-center
            h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-900
            ">
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem icone={IconeHome} texto="Incicio" url="/" />
                <MenuItem icone={IconeAjustes} texto="Ajustes" url="/ajustes" />
                <MenuItem icone={IconeSino} texto="Notificações" url="/notificacoes" />
            </ul>
            <ul>
                <MenuItem className={'text-red-600 hover:bg-red-400 hover:text-white'} icone={IconeLogout} texto="Sair" onClick={()=>console.log('Logout')} />
            </ul>
        </aside>
    )
}