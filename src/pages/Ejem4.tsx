const Admin =() => <p> Soy el Admin</p>
const Invitado =() => <p> Soy el Invitado</p>

function ComponenteCondicional() {
    const isAdmin =true
    return isAdmin ?<Admin/>:<Invitado/>
    
}
export default function Ejem4(){
return<ComponenteCondicional/>

}
