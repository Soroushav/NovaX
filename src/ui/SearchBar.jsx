import { HiOutlineMagnifyingGlass } from "react-icons/hi2"

function SearchBar() {
    return (
        <div className="w-[40%] relative">
            <HiOutlineMagnifyingGlass className="absolute text-3xl text-stone-300 top-[50%] -translate-y-1/2 mx-4"/>
            <input className="rounded-full w-full p-4 outline-none outline-stone-300 px-14 focus:outline-stone-400 "  placeholder="Search..."/>
        </div>
    )
}

export default SearchBar
