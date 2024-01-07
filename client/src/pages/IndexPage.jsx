import {Link, Route} from "react-router-dom"
import Layout from "../Layout"
import Header from "../Header"
import LoginPage from "./LoginPage"

export default function IndexPage(){
    return(
        <>
        <div classNameName="py-10">
            <div className="mt-14 mx-10 w-screen">
                            <div className="grid grid-cols-4 gap-y-4">
                                <div className="flex flex-col h-96 w-72">
                                    <img src="images/img1.jpg" className="rounded-xl w-72 h-64"/>
                                    <div className="flex justify-between mt-2">
                                        <p className="text-sm font-medium">Room 101</p>
                                        <div className="flex">
                                            <i className="fa-solid fa-star"></i>
                                            <p className="text-sm font-light">5.0</p>
                                        </div>
                                    </div>
                                    <p className="gray-text">22-27 Jul</p>
                                    <p className="text-sm font-medium mt-2">₹150 per day</p>
                                </div>
                                <div className="flex flex-col h-96 w-72">
                                    <img src="images/img2.jpg" className="rounded-xl w-72 h-64"/>
                                    <div className="flex justify-between mt-2">
                                        <p className="text-sm font-medium">Room 102</p>
                                        <div className="flex">
                                            <i className="fa-solid fa-star"></i>
                                            <p className="text-sm font-light">5.0</p>
                                        </div>
                                    </div>
                                    <p className="gray-text">22-27 Jul</p>
                                    <p className="text-sm font-medium mt-2">₹150 per day</p>
                            </div>
                            

                            <div className="flex flex-col h-96 w-72">
                                    <img src="images/img3.jpg" className="rounded-xl w-72 h-64"/>
                                    <div className="flex justify-between mt-2">
                                        <p className="text-sm font-medium">Room 201</p>
                                        <div className="flex">
                                            <i className="fa-solid fa-star"></i>
                                            <p className="text-sm font-light">5.0</p>
                                        </div>
                                    </div>
                                    <p className="gray-text">22-27 Jul</p>
                                    <p className="text-sm font-medium mt-2">₹150 per day</p>
                            </div>
                            <br />
                            <div className="flex flex-col h-96 w-72">
                                    <img src="images/img3.jpg" className="rounded-xl w-72 h-64"/>
                                    <div className="flex justify-between mt-2">
                                        <p className="text-sm font-medium">Room 201</p>
                                        <div className="flex">
                                            <i className="fa-solid fa-star"></i>
                                            <p className="text-sm font-light">5.0</p>
                                        </div>
                                    </div>
                                    <p className="gray-text">22-27 Jul</p>
                                    <p className="text-sm font-medium mt-2">₹150 per day</p>

                            </div>
                            <div className="flex flex-col h-96 w-72">
                                    <img src="images/img3.jpg" className="rounded-xl w-72 h-64"/>
                                    <div className="flex justify-between mt-2">
                                        <p className="text-sm font-medium">Room 201</p>
                                        <div className="flex">
                                            <i className="fa-solid fa-star"></i>
                                            <p className="text-sm font-light">5.0</p>
                                        </div>
                                    </div>
                                    <p className="gray-text">22-27 Jul</p>
                                    <p className="text-sm font-medium mt-2">₹150 per day</p>
                            </div>
                            <div className="flex flex-col h-96 w-72">
                                    <img src="images/img3.jpg" className="rounded-xl w-72 h-64"/>
                                    <div className="flex justify-between mt-2">
                                        <p className="text-sm font-medium">Room 201</p>
                                        <div className="flex">
                                            <i className="fa-solid fa-star"></i>
                                            <p className="text-sm font-light">5.0</p>
                                        </div>
                                    </div>
                                    <p className="gray-text">22-27 Jul</p>
                                    <p className="text-sm font-medium mt-2">₹150 per day</p>
                            </div>
                            <br />
                            <div className="flex flex-col h-96 w-72">
                                    <img src="images/img3.jpg" className="rounded-xl w-72 h-64"/>
                                    <div className="flex justify-between mt-2">
                                        <p className="text-sm font-medium">Room 201</p>
                                        <div className="flex">
                                            <i className="fa-solid fa-star"></i>
                                            <p className="text-sm font-light">5.0</p>
                                        </div>
                                    </div>
                                    <p className="gray-text">22-27 Jul</p>
                                    <p className="text-sm font-medium mt-2">₹150 per day</p>
                            </div>
                            
                </div>

                
            </div>

        </div>
        </>
        
    )
}