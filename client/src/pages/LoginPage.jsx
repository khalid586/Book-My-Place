import { Link } from "react-router-dom"

export default function LoginPage(){
    return (
        <>
            <div className="py-20">
                <p className="text-4xl pb-4">Login</p>
                <form>
                    <input type="email" placeholder="your@gmail.com"/><br></br>
                    <input type="password" placeholder="password" /><br></br>
                    <button className="primary">Login</button>
                </form>
                <div className="text-gray-500">
                    Don't have an account? <Link className = "underline text-black" to = {"/register"}>Register Now</Link> 
                </div>           
            </div>

            
        </>
    )
}