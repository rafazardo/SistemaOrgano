import './index.css'

const CampoTexto = (props) => { // Outro jeito de fazer function

    const placeholderModificado = `${props.placeholder}...`

    return (
        <div className="campoTexto">
            <label> {props.label} </label>
            <input placeholder={placeholderModificado} />
        </div>
    )
}

export default CampoTexto;