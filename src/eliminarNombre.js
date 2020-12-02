import {useState} from "react"

function EliminarNombre (props) {

    let [textoBorrar,setTextoBorrar] = useState("")
  
    function eliminarTexto(e) {
      setTextoBorrar(e.target.value)
    }
  
    function pasarela() {
      props.BorrarTexto(textoBorrar)
    }
  
  return (<>
  <input type="text" value={textoBorrar} onChange={eliminarTexto}/>
    <button onClick={pasarela}>Borrar</button>
  </>)
  
  }

  export default EliminarNombre;