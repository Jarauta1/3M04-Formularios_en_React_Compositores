import {useState} from "react"

function EliminarNombre () {

    let [textoBorrar,setTextoBorrar] = useState("")
  
    function eliminarTexto(e) {
      setTextoBorrar(e.target.value)
    }
  
    function pasarela() {
      /* borrarTexto(textoBorrar) */
    }
  
  return (<>
  <EliminarNombre textoBorrar={textoBorrar} pasarela={pasarela} />
  <input type="text" value={textoBorrar} onChange={eliminarTexto}/>
    <button onClick={pasarela}>Borrar</button>
  </>)
  
  }

  export default EliminarNombre;