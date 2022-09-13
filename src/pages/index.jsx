import Navegador from '../components/Navegador'

export default function Inicio(){
    // return "Inicio"
    return (
        <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>

            <Navegador texto="Bem Vindo" destino="/bem-vindo"/>
            <Navegador texto="Empresa" destino="/empresa"/>
            <Navegador texto="Sobre Nós" destino="/sobre-nos"/>
            <Navegador texto="Navegação #01" destino="/navegacao"/>
            <Navegador texto="Navegação #02" destino="/cliente/sp/123"/>
            <Navegador texto="Componente com Estado" destino="/estado"/>
            <Navegador texto="Integração com API #01" destino="/integracao_1"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico"/>

        </div>
    )
}