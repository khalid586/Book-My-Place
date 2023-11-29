import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function RegisterPage(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function registerUser(ev){
        ev.preventDefault();
        axios.post('/register',{
            name,
            email,
            password,
        })
    }

    return (
        <div className="py-20">
            <p className="text-4xl pb-4">Register</p>
            <form onSubmit={registerUser}>
                <input type="text" 
                placeholder = "Your Name"
                value={name} 
                onChange={ev => setName(ev.target.value)}/> <br /> 
                <input type="email" placeholder="your@gmail.com"
                value={email} 
                onChange={ev => setEmail(ev.target.value)}/><br></br>
                <input type="password" placeholder="password" 
                value={password} 
                onChange={ev => setPassword(ev.target.value)}/><br></br>
                <button className="green">Register</button>
            </form>

            <div className="text-gray-500">
                    Already have an account? <Link className = "underline text-black" to = {"/login"}>Login Now</Link> 
                </div> 
        </div>

    )
}