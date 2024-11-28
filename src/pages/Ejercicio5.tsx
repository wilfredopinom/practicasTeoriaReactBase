/* Estamos usando muhco la clase boton, crea un componente
 boton que nos permita reutilizarlo en tod ala clase*/

 import Button from "../components/Button";

 export default function Ejercicio5() {
   const handleClick = () => {
     alert("Hola");
   };
 
   return <Button onClick={handleClick}>Pulsame</Button>;
 }
 