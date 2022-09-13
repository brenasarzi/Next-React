import Layout from "../../components/Layout";
import styles from '../../styles/estiloso.module.css'

export default function Navegacao(){
    return (
        <Layout titulo="Exemplo de Navegação #01">
            <div className={styles.estiloso}>
                <h1>Navegação #01</h1>
            </div>
        </Layout>
    )
}