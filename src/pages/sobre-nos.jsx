import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/estiloso.module.css'

export default function SobreNos(){
    return(
        <Layout titulo="Saiba mais sobre nós!">
            <div className={styles.estiloso}>
                <h1>Sobre Nós!</h1>
            </div>
        </Layout>

    )
}