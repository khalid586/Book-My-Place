import { Link } from "react-router-dom"

export default function PlacesPage(){
    return(
        <div>
            <div className="text-center">
                <Link className = "inline-flex gap-1 px-4 py-2 text-white rounded-full font-semibold bg-primary" to = "/account/places/new"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add new place</Link>
            </div>
        </div>
    )
}