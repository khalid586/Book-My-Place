import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"

export default function LoginPage(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [redirect,setRedirect] = useState(false)

    async function loginSubmit(ev){
        ev.preventDefault()

        try{
            await axios.post('/login',{email,password});
            alert('Login successful')
            setRedirect(true);
        } catch(e){
            alert('Login failed')
        }
    }

    if(redirect){
        return <Navigate to = {'/'} />
    }

    return (
        <>
            <div className="py-20">
                <p className="text-4xl pb-4">Login</p>
                <form onSubmit={loginSubmit}>
                    <input type="email" placeholder="your@gmail.com" 
                        value={email} 
                        onChange={ ev => setEmail(ev.target.value)}/> <br></br>

                    <input type="password" placeholder="password" 
                        value={password} 
                        onChange={ ev => setPassword(ev.target.value)}/><br></br>

                    <button className="primary">Login</button>
                </form>
                <div className="text-gray-500">
                    Don't have an account? <Link className = "underline text-black" to = {"/register"}>Register Now</Link> 
                </div>           
            </div>

            
        </>
    )
}                   