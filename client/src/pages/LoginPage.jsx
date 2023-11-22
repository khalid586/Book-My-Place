import Header from "../Header"
import Layout from "../Layout"

export default function LoginPage(){
    return (
        <div className="py-20">
            <p className="text-4xl pb-4">Login</p>
            <form>
                <input type="email" placeholder="your@gmail.com"/><br></br>
                <input type="password" placeholder="password" /><br></br>
                <button className="primary">Login</button>
            </form>
        </div>

    )
}