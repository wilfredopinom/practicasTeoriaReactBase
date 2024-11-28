
//las props son inmutables esto no esta del todo correcto

function Saludador({msg}:{msg:string}){
    msg=msg.toLowerCase()
    return <div>{msg}</div>

    export default function Ejem8(){
        return<Saludador msg= 'Hola'/>
    }
}