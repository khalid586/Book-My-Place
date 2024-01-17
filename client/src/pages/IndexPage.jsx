import {Link, Route} from "react-router-dom"
import Layout from "../Layout"
import Header from "../Header"
import LoginPage from "./LoginPage"
import "./IndexPage.css";
import { UserContext } from "../UserContext";
import { useContext } from "react"


export default function IndexPage(){
    const {user} = useContext(UserContext)

    return(
        <>
        <div className="room-container">
            <div className="room-grid">
                <div className="room-card">
                    <img src="images/img1.jpg" alt="Room 101" className="room-image" />
                    <div className="room-details">
                        <p className="room-title">Room 101</p>
                        <div className="room-rating">
                        <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="room-date gray-text">22-27 Jul</p>
                        <p className="room-price text-sm font-medium mt-2">$150 per day</p>
                    </div>
                    <Link to={user?"/account":"/login"} className="btn">Book Now</Link>
                </div>
                <div className="room-card">
                    <img src="images/img2.jpg" alt="Room 102" className="room-image" />
                    <div className="room-details">
                        <p className="room-title">Room 102</p>
                        <div className="room-rating">
                        <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="room-date gray-text">22-27 Jul</p>
                        <p className="room-price text-sm font-medium mt-2">$150 per day</p>
                    </div>
                    <Link to={user?"/account":"/login"} className="btn">Book Now</Link>
                </div>
                <div className="room-card">
                    <img src="images/img3.jpg" alt="Room 103" className="room-image" />
                    <div className="room-details">
                        <p className="room-title">Room 103</p>
                        <div className="room-rating">
                        <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="room-date gray-text">22-27 Jul</p>
                        <p className="room-price text-sm font-medium mt-2">$150 per day</p>
                    </div>
                    <Link to={user?"/account":"/login"} className="btn">Book Now</Link>
                </div>
                <div className="room-card">
                    <img src="images/img3.jpg" alt="Room 201" className="room-image" />
                    <div className="room-details">
                        <p className="room-title">Room 201</p>
                        <div className="room-rating">
                        <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="room-date gray-text">22-27 Jul</p>
                        <p className="room-price text-sm font-medium mt-2">$150 per day</p>
                    </div>
                    <Link to={user?"/account":"/login"} className="btn">Book Now</Link>
                </div>
                <div className="room-card">
                    <img src="images/img2.jpg" alt="Room 121" className="room-image" />
                    <div className="room-details">
                        <p className="room-title">Room 121</p>
                        <div className="room-rating">
                        <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="room-date gray-text">22-27 Jul</p>
                        <p className="room-price text-sm font-medium mt-2">$150 per day</p>
                    </div>
                    <Link to={user?"/account":"/login"} className="btn">Book Now</Link>
                </div>
                <div className="room-card">
                    <img src="images/img1.jpg" alt="Room 301" className="room-image" />
                    <div className="room-details">
                        <p className="room-title">Room 301</p>
                        <div className="room-rating">
                        <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="room-date gray-text">22-27 Jul</p>
                        <p className="room-price text-sm font-medium mt-2">$150 per day</p>
                    </div>
                    <Link to={user?"/account":"/login"} className="btn">Book Now</Link>
                </div>
                <div className="room-card">
                    <img src="images/img1.jpg" alt="Room 501" className="room-image" />
                    <div className="room-details">
                        <p className="room-title">Room 501</p>
                        <div className="room-rating">
                        <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="room-date gray-text">22-27 Jul</p>
                        <p className="room-price text-sm font-medium mt-2">$150 per day</p>
                    </div>
                    <Link to={user?"/account":"/login"} className="btn">Book Now</Link>
                </div>

                
            </div>
        </div>
        </>
        
    )
}