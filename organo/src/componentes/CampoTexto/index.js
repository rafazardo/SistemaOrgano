import './index.css'

const CampoTexto = (props) => { // Outro jeito de fazer function

    const placeholderModificado = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campoTexto">
            <label> {props.label} </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    )
}

export default CampoTexto;