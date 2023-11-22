import {Link} from "react-router-dom"

export default function Header(){
    return(
    <header className='justify-between flex'>
       
        <Link to={"/"} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
            </svg>
            <span className='flex text-red-500 font-bold font-serif shadow-sm shadow-gray-300'>
                Book My Place
            </span>
        </Link>
        <div className='flex border gap-4 border-red-600 rounded-full shadow-gray-400 shadow-md py-2 px-4'>
            <div>
                <img height = "35px" width = "40px" src="https://cdn.myportfolio.com/93bea8ef802a988ed8ab44889dc82b83/b99b565b-5336-4cd2-b731-c64c24515600_rw_1200.gif?h=d41ed58a4aa58082b4478ffc4571d416" alt="" />
            </div>
            <div>My Place</div>
                <div className='border-l border-green-600'></div>
            <div>My Time</div>
                <div className='border-l border-green-600'></div>
            <div>Search</div>
                <button className='bg-primary text-white p-1 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
        </div>
        <Link to = {"/login"} className='flex gap-2 border border-red-400 rounded-full py-2 px-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className='text-white bg-green-500 rounded-full overflow-hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
        </Link>
    </header>        
    )
}