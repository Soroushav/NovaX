import { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("search") || ""); 

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setSearchParams({ search: inputValue }); 
      setInputValue("");
      navigate(`/search?search=${inputValue}`); 
    }
  };
  return (
    <div className="w-[40%] relative">
      <HiOutlineMagnifyingGlass className="absolute text-3xl text-stone-300 top-[50%] -translate-y-1/2 mx-4" />
      <input
        className="rounded-full w-full p-4 outline-none outline-stone-300 px-14 focus:outline-indigo-400 "
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
