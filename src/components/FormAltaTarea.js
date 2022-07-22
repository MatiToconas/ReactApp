import React,{useState} from 'react'


const FormAltaTarea = ({agregarTutorial}) => {

    const [tareaInput, setTareaInput] = useState('')
    const [url, setUrl] = useState('')
    const [tipo, setTipo] = useState('')


    const cambioTutorial = (e) => {
        setTareaInput(e.currentTarget.value)
    }

    const cambioURL = (e) => {
        setUrl(e.currentTarget.value)
    }

    const changeTipo = (e) => {
        setTipo(e.currentTarget.value)
    }


    const alEnviar = (e) => {
        
        e.preventDefault();
        const tutorial = {
            nombreTutorial: tareaInput,
            tipoTutorial : tipo,
            url : url,
            activo: false
        }
        agregarTutorial(tutorial);
        setTareaInput("");
        setUrl("");
    }

    return (
        <div>
            <form onSubmit={alEnviar}>
                <input value={tareaInput} type="text" onChange={cambioTutorial} placeholder="Ingrese Nombre Tutorial"/>
                <input value={url} type="text" onChange={cambioURL} placeholder="URL Tutorial"/>
                
                <br />
                <select style={{width: '180px'}} value={tipo} onChange={changeTipo}>
                    <option value="Programación">Programación</option>
                    <option value="Matemática">Matemática</option>
                    <option value="Clase Grabada">Clase Grabada</option>
                </select>
                <button>Agregar Tutorial</button>
            </form>

        </div>
    )
}

export default FormAltaTarea