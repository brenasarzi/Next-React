import Link from 'next/link'
import style from '../styles/Navegador.module.css'

export default function Inicio(props){
    return(
        <div>
            <div className={style.navegador}>
                <Link href={props.destino}>
                    {props.texto}
                </Link>
            </div>
           
        </div>
    )
}