
//las funciones deben cumplir con alta cohesion bajo acoplamiento
interface Props{
    mensaje:string
    formateador:(x:string) => string
}
function Componente({mensaje, formateador}: Props){
return formateador(mensaje)
}

export default function Ejem7() {
    const pasarAMayuscvulas=(valor:string) => valor.toUpperCase()
    //const pasarAMinusculas=(valor:string) => valor.toLowerCase()
   // const obtenerPrimeraLetra =(valor:string) =>valor[0]
  return (
    <Componente mensaje= 'Hola' formateador ={pasarAMayuscvulas} />
    
 
  )
}
