/*Crea un componente que simule el lanzaiento de un dado.
al pusar el boton, mostrara un numero aleatorio entre 1 y 6 */

import  { useState } from 'react'





export default function Ejercicio4() {

    const [dado,setDado]=useState<number>()
/*const handleLanzarDado = () =>{
    setDado( Math.floor(Math.random() *6+1 )  
  
})*/
    
    return (
  <>
{dado && <p>{dado}</p>}
  <button onClick={ () => setDado( Math.floor(Math.random() *6+1 ))}> Lanza el dado</button>
  
  </>
  )

}