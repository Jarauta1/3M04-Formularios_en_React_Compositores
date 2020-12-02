import './App.css';
import {useState} from "react"
import {BrowserRouter,Route} from "react-router-dom"
import Cabecera from "./cabecera"
import Compositores from "./compositores"
import EliminarNombre from "./eliminarNombre"
import Footer from "./footer"



function App() {
  let [array,setArray] = useState([
    {
      nombre: 'Wolfgang Amadeus Mozart', 
      fecha: 1756, 
      canciones: ['Symphonie Nr 40', 'Don Giovanni']},
    {
      nombre: 'Ludwig van Beethoven', 
      fecha: 1770,
      canciones: ['Symphonie No.5', 'Piano Sonata No.32']
    },
    {
      nombre: 'Johann Sebastian Bach', 
      fecha: 1685,
      canciones: ['Vivace', 'Largo ma non tanto']
    }
]

)




  let [texto,setTexto] = useState("")
  /* ----------- Hasta apartado 4 ------------ */
  /* let [mostrar, setMostrar] = useState ("") */
  /* ----------------------------------------- */
 /*  let [textoBorrar,setTextoBorrar] = useState("") */

  function cambiarTexto(e) {
    setTexto(e.target.value)
  }

  /* --- Hasta apartado 10 --- */
  /*   function eliminarTexto(e) {
    setTextoBorrar(e.target.value)
  } */
  /* ------------------------- */

  

  function mostrarTexto() {
    /* Hasta apartado 4  */
    /* setMostrar(texto) */
    /* ----------------- */
    let copia = array.slice()
    let objeto = {}
    objeto.nombre = texto
    copia.push(objeto)
    setArray(copia)
    setTexto("")
  }

  /* -------------------- Apartado 7 -------------------- */
 /*  function borrarTexto() {
    let copia
    copia = array.filter(compositor => compositor !== textoBorrar)
    setArray(copia)
    setTextoBorrar("")
  } */
  /* ---------------------------------------------------- */

  /* -------------------- Apartado 8 -------------------- */
  
  /* function pasarela() {
    BorrarTexto(textoBorrar)
  } */
  
  function BorrarTexto(nombre) {
   
    let copia
    copia = array.filter(compositor => compositor.nombre !== nombre)
    setArray(copia)
    /* setTextoBorrar("")  */
    
  }
/* ---------------------------------------------------- */

  return (<BrowserRouter>
  <Cabecera/>
  <ul>
    <Compositores array={array}/>
  </ul>
  <Route exact path="/"></Route>
  <Route exact path="/anyadir">
  <input type="text" value={texto} onChange={cambiarTexto}/>
  {/* Hasta apartado 4 */}
  {/* <p>{mostrar}</p> */}
  {/* ---------------- */}
  <button onClick={mostrarTexto}>Subir</button>
  </Route>
  <Route exact path="/eliminar">
  <EliminarNombre BorrarTexto={BorrarTexto} />
  </Route>
  <Footer/>
  </BrowserRouter>)
}

export default App;
