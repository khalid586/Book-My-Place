import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function RegisterPage(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);

    async function registerUser(ev){
        ev.preventDefault();
        try{
            await axios.post('/register',{
                name,
                email,
                password,
            })
            alert('Registration successful. Now you can login!')
            setRedirect(true);
        }catch(e){
            if(e.response.status === 422){
                alert('You have already registered. Please Login');
                setRedirect(true);
            }
            else{
                alert('Registration failed. Please try again later!')
            }
        }
    }

    if(redirect){
        return <Navigate to = {'/login'} />
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