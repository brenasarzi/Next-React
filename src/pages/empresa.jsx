import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/estiloso.module.css'

export default function Empresa(){
    return(
        <Layout titulo="Saiba mais sobre nossa empresa!">
            <div className={styles.estiloso}>
                <h1>Empresa!</h1>
            </div>
        </Layout>

    )
}