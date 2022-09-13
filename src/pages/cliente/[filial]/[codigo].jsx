import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function ClienteProCodigo(){
    const router = useRouter()
    return(
        <Layout titulo="Navegação Dinâmica #02">
            <span>Código = {router.query.codigo}</span>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}