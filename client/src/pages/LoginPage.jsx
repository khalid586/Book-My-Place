import Header from "../Header"
import Layout from "../Layout"

export default function LoginPage(){
    return (
        <div className="py-20">
            <h1 className="text-4xl text-center">Login</h1>
            <form>
                <input type="email" placeholder="your@gmail.com"/><br></br>
                <input type="password" placeholder="password" /><br></br>
                <button className="primary">Login</button>
            </form>
        </div>

    )
}