import React, { useState } from 'react' //useState es un hub, siemore comiensa por un use. usecallback...

export default function Ejem11() {
    const titulo  ="El estado de react"
    const[pulsado,setPulsado] =useState(false)
    const [contador,setContador]=useState(0)


    function handleClicl(){
       setPulsado(!pulsado)
       setContador(contador+1)
    }

  return (
    <>
    <h1>{titulo}</h1>
 <button onClick={handleClicl}>
 {pulsado?   'Esta pulsado':'No esta pulsado'}
 
 </button>
 {contador}
 </>
  )
}
