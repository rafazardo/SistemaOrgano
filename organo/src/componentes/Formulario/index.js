import CampoTexto from '../CampoTexto';
import './index.css'

function Formulario() {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador: </h2>
                {/* Ctrl + espaco para ele importar automatico o componente */}
                <CampoTexto label="Nome" placeholder="Digite seu nome"/> 
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem"/>  
            </form>
        </section>
    )
}

export default Formulario;