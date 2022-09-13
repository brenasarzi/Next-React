import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/estiloso.module.css'

export default function Estiloso(){
    return(
        <Layout titulo="Seja bem vindo!">
            <div className={styles.estiloso}>
                <h1>Bem Vindo!</h1>
            </div>
        </Layout>

    )
}