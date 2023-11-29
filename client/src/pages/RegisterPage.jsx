import { Link } from "react-router-dom"

export default function RegisterPage(){
    return (
        <div className="py-20">
            <p className="text-4xl pb-4">Register</p>
            <form>
                <input type="text" placeholder = "Your Name" name="" id="" /> <br /> 
                <input type="email" placeholder="your@gmail.com"/><br></br>
                <input type="password" placeholder="password" /><br></br>
                <button className="green">Register</button>
            </form>

            <div className="text-gray-500">
                    Already have an account? <Link className = "underline text-black" to = {"/login"}>Login Now</Link> 
                </div> 
        </div>

    )
}