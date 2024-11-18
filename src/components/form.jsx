import { useState } from "react"

//traitement de formulaire
function Form(){

const [name,setName]=useState("")
const[age,setAge]=useState(0)

    return<>
    <form>
        
        <label htmlFor="name">Nom :</label>
        <input type ="text" id="name" onChange={(e)=>setName(e.target.value)}></input>
        <br/>
        <label htmlFor="age">Age :</label>
        <input type ="number" id="age" onChange={(e)=>setAge(e.target.value)}></input>
        <br/>
        <button type="submit">envoyer</button>
    </form>
    <h1>Nom: {name} , Age: {age}</h1>
    </>
}
export default Form