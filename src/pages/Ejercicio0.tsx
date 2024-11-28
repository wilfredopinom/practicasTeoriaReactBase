/* crea un componente que se le pase como prop un valor en grados centigrados y 
uestre por pantalla ese valor en grados FArenheit*/


  
  interface Props{
    grados:number

    //TemperaturaCentAFarenh:(valor:number) => number
  }
  
  function Conversor( {grados}: Props){
    const farenheit =1.8 * grados +32
    
    return (
      <div>
        {farenheit}
      </div>
    )
  }
  export default function Ejercicio0() {
    return <Conversor grados={30}/>
   
  }
  
  