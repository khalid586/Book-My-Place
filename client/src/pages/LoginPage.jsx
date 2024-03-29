import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
import { createContext } from "react";
import { UserContext } from "../UserContext"
import { useContext } from "react";

export default function LoginPage(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [redirect,setRedirect] = useState(false)
    const {setUser} = useContext(UserContext);

    async function loginSubmit(ev){
        ev.preventDefault()

        try{
            const {data} = await axios.post('/login',{email,password});
            setUser(data);
            alert('Login successful')
            setRedirect(true);
        } catch(e){
            if (e.response.status === 400) {
                const errorResponse = e.response.data; 
                if (errorResponse && errorResponse.errors && errorResponse.errors.length > 0) {
                    let errorMessage = "Registration failed due to the following errors:\n";
                    errorResponse.errors.forEach(error => {
                    errorMessage += `${error.msg}\n`;
                });
                    alert(errorMessage);
                }else {
                    alert('An unknown error occurred during registration.');
                }
            }
            else{
                alert(e.response.data)
            }
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