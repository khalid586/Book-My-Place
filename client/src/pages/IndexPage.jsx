import {Link, Route} from "react-router-dom"
import Layout from "../Layout"
import Header from "../Header"
import LoginPage from "./LoginPage"
import "./IndexPage.css";



export default function IndexPage(){
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
                    <p className="room-price text-sm font-medium mt-2">₹150 per day</p>
                </div>
                </div>
                <div className="room-card">
                <img src="images/img1.jpg" alt="Room 101" className="room-image" />
                <div className="room-details">
                    <p className="room-title">Room 101</p>
                    <div className="room-rating">
                    <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="room-date gray-text">22-27 Jul</p>
                    <p className="room-price text-sm font-medium mt-2">₹150 per day</p>
                </div>
                </div>
                <div className="room-card">
                <img src="images/img1.jpg" alt="Room 101" className="room-image" />
                <div className="room-details">
                    <p className="room-title">Room 101</p>
                    <div className="room-rating">
                    <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="room-date gray-text">22-27 Jul</p>
                    <p className="room-price text-sm font-medium mt-2">₹150 per day</p>
                </div>
                </div>
                <div className="room-card">
                <img src="images/img1.jpg" alt="Room 101" className="room-image" />
                <div className="room-details">
                    <p className="room-title">Room 101</p>
                    <div className="room-rating">
                    <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="room-date gray-text">22-27 Jul</p>
                    <p className="room-price text-sm font-medium mt-2">₹150 per day</p>
                </div>
                </div>
                <div className="room-card">
                <img src="images/img1.jpg" alt="Room 101" className="room-image" />
                <div className="room-details">
                    <p className="room-title">Room 101</p>
                    <div className="room-rating">
                    <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="room-date gray-text">22-27 Jul</p>
                    <p className="room-price text-sm font-medium mt-2">₹150 per day</p>
                </div>
                </div>
                <div className="room-card">
                <img src="images/img1.jpg" alt="Room 101" className="room-image" />
                <div className="room-details">
                    <p className="room-title">Room 101</p>
                    <div className="room-rating">
                    <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="room-date gray-text">22-27 Jul</p>
                    <p className="room-price text-sm font-medium mt-2">₹150 per day</p>
                </div>
                </div>

                {/* Repeat the above structure for other rooms */}
            </div>
        </div>
        </>
        
    )
}