import Link from 'next/link'
import style from '../styles/Layout.module.css'

export default function Layout(props){
    console.log(props)
    return (
        <div className={style.layout}>
            <div className={style.cabecalho}>
                <Link href="/">Home</Link>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
            </div>
            <div className={style.children}>
                {props.children}
            </div>
        </div>
    )
}