
function Saludador() {
  return <div>¡Hola desde el componente Saludador!</div>;
}

interface Props{
  nombre:string
  valor:number
  activo: boolean
  hobbies: string[]
  dato: JSX.Element
  MiComponente :React.ReactNode
  miFuncion:(valor:number) => number
}


function ComponentesConProps({nombre,valor,activo,hobbies,dato,MiComponente,miFuncion}:Props) {
  return (
    <>
    <div> Hola {nombre} </div>
    <div> El valor es : {valor}</div>
    <div> Esta Activo ? {activo? 'SI':'NO'}</div>
    <div>Sus hobbies son {hobbies.join(', ')} </div>
    <div>{dato}</div>
  <div>{MiComponente}</div>
  <div>{miFuncion(6)}</div>
    </>
  )
}



export default function Ejem5() {
  return (
   <ComponentesConProps 
   nombre ='Ana' 
   valor ={6} 
   activo = {true}
  hobbies= {['Cantar','Bailar']}
  dato = {<p> Hola </p>  }
  MiComponente ={<Saludador/>}
  miFuncion={(v) => v+1}
    />
  )
}

