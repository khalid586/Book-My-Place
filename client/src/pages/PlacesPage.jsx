import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

export default function PlacesPage(){
    const {action} = useParams(); 
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [photoLink,setPhotoLink] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);

    async function  addPhotoByLink(ev){
        ev.preventDefault();
        await axios.post('/upload-by-link',{link:photoLink})
    }
    return(
        <div>
            {action !== 'new' && (
                <div className="text-center">
                <Link className = "inline-flex gap-1 px-4 py-2 text-white rounded-full font-semibold bg-primary" to = "/account/places/new"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add new place

                        
                </Link>
            </div>
            )}

            {action === 'new' && (
                <div>
                    <form className="text-left font-serif">
                        <h2 className="text-2xl mt-4 font-bold"> Title</h2>
                        <p className="font-medium">Title for your place,should be short</p>
                        <input value={title} onChange={ev => setTitle(ev.target.value)} className="text-gray-500 text-sm" type="text" placeholder="Title " /><br />
                        <h2 className="text-2xl mt-4 font-bold"> Address</h2>
                        <p className="font-medium">Address to this place</p>
                        <input value={address} onChange={ev => setAddress(ev.target.value)} className="text-gray-500 text-sm" type="text" placeholder="Address" />
                        <h2 className="text-2xl mt-4 font-bold"> Photos</h2>
                        <p className="font-medium">Add photos of your place</p>
                        <div className="flex gap-2">
                            <input value={photoLink} onChange={ev => setPhotoLink(ev.target.value)} className="text-gray-500 text-sm" type="text" placeholder="Add photos using link" />
                            <button onClick={addPhotoByLink} className="bg-gray-200 px-4 py-1 rounded-2xl">Add Photo</button>
                        </div>
                        
                        <div>
                            <button className="border p-4 bg-green-500 hover:bg-primary text-white font-bold mt-2 rounded-2xl">Upload</button>
                        </div>
                        <h2 className="text-2xl mt-4 font-bold"> Description</h2>
                        <p className="font-medium">Description of your place</p>
                        <textarea value={description} onChange={ev => setDescription(ev.target.value)}/>

                        <h2 className="text-2xl mt-4 font-bold"> Perks</h2>
                        <p className="font-medium">Select all the perks</p>

                        <div className="py-2 grid gap-2 grid-cols-3">
                            <label className="flex ">
                                <input type="checkbox" />
                                <span className="flex p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                    </svg>Wifi</span>
                            </label>
                            <label className="flex ">
                                <input type="checkbox" />
                                <span className="flex p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>Free Parking</span>
                            </label>
                            <label className="flex ">
                                <input type="checkbox" />
                                <span className="flex p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Zm-1.683 6.443-.005.005-.006-.005.006-.005.005.005Zm-.005 2.127-.005-.006.005-.005.005.005-.005.005Zm-2.116-.006-.005.006-.006-.006.005-.005.006.005Zm-.005-2.116-.006-.005.006-.005.005.005-.005.005ZM9.255 10.5v.008h-.008V10.5h.008Zm3.249 1.88-.007.004-.003-.007.006-.003.004.006Zm-1.38 5.126-.003-.006.006-.004.004.007-.006.003Zm.007-6.501-.003.006-.007-.003.004-.007.006.004Zm1.37 5.129-.007-.004.004-.006.006.003-.004.007Zm.504-1.877h-.008v-.007h.008v.007ZM9.255 18v.008h-.008V18h.008Zm-3.246-1.87-.007.004L6 16.127l.006-.003.004.006Zm1.366-5.119-.004-.006.006-.004.004.007-.006.003ZM7.38 17.5l-.003.006-.007-.003.004-.007.006.004Zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007Zm-.5 1.873h-.008v-.007h.008v.007ZM17.25 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                    Radio
                                </span>
                            </label>
                            <label className="flex ">
                                <input type="checkbox" />
                                <span className="flex p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                    </svg>
                                    Free food
                                </span>
                            </label>
                        </div>

                        <h2 className="text-2xl mt-4 font-bold"> Check in & Check out time</h2>
                        <p className="text-sm text-gray-500">Add check in and check out time and maximum number of guests you can accomodate</p>

                        <div className="grid gap-2 sm:grid-cols-3 mt-5">
                            <div>
                                <h3 className="mt-2 mb-1">Check in time</h3>
                                <input value={checkIn} onChange={ev => setCheckIn(ev.target.value)} type="text" placeholder="14:00" />
                            </div>
                            <div>
                                <h3 className="mt-2 mb-1">Check out time</h3>
                                <input value = {checkOut} onChange={ev => setCheckOut(ev.target.value)} type="text" placeholder="15:00" />
                            </div>
                            <div>
                                <h3 className="mt-2 mb-1">Maximum number of guests</h3>
                                <input value = {maxGuests} onChange={ev => setMaxGuests(ev.target.value)} type="text" placeholder="1" />
                            </div>
                        </div>
                        <button className="primary1"> Save </button>
                    </form>
                </div>
            )}
        </div>
    )
}