import Link from 'next/link';

interface MenuItemProps {
    url?: any,
    texto: string,
    icone: any,
    className?: string,
    onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarLink() {
        return (
            <>
                {props.icone}
                <span className='text-xs font-light'> {props.texto}</span>
            </>
        );
    }
    return (
        <li className={'hover:bg-gray-200 dark:hover:bg-gray-700'} onClick={props.onClick}>
            {props.url ? (
                <Link href={props.url} className='flex flex-col justify-center items-center w-20 h-20 text-gray-600 dark:text-gray-200'>
                    {renderizarLink()}
                </Link>
            ) :
                (
                    <div className={`${props.className} flex flex-col justify-center items-center w-20 h-20 cursor-pointer dark:text-gray-200`}>
                        {renderizarLink()}
                    </div>
                )
            }

        </li>
    )
}