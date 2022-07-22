
const Tarea = ( {indice, tarea, desactivar, borrar} ) => {
    return (
        <div className="todo"> 
        <select>
                <option> {tarea.tipoTutorial} </option>
            
            </select> 
            {tarea.nombreTutorial}

            <div>
            <button onClick={() => desactivar(indice)}>{!tarea.activo ? "habilitar" : "deshabilitar"}</button>
                <button onClick={() => borrar(indice)}>  Borrar Tutorial   </button>
                {!tarea.activo?  "": <a href={tarea.url}>   Link Tutorial  </a> }

                
                                  
            </div>
        </div>
    )
}


export default Tarea