function Compositores(props) {
    let mostrarCompositores = props.array.map(compositor=>{
      return <li>{compositor.nombre}</li>
    })
    return mostrarCompositores
  }

  export default Compositores;