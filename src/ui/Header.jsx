import SearchBar from "./SearchBar"
import UserHeader from "./UserHeader"

function Header() {
    return (
        <header className="bg-gray-50 py-8 px-16 flex justify-between items-center h-28">
            <SearchBar />
            <UserHeader/>
        </header>
    )
}

export default Header
