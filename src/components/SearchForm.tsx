
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSearch } from "../context/SearchProvider";

const SearchForm = () => {
  let limit = 9;
  let offset = 0
  const [name, setName] = useState("")

  const {handleSearch, resetSearch, searchResult} = useSearch()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if(!name.trim()) return
    handleSearch(name, limit, offset)
  }

  const handleReset = (e: any) => {
    resetSearch()
    setName("")
  }

  const handleKeyDown = (e: any) => {
    if(e.key === "Escape") resetSearch()
  }
  return (
    <form className="relative" onSubmit={handleSubmit} >
      <input
        className="border rounded p-2 focus:ring-1 outline-none w-56"
        placeholder="Search..."
        onKeyDown={handleKeyDown}
        value={name}
        onChange={({target}) => setName(target.value)}
      />
      {searchResult.length ? (<button className="absolute top-1/2 -translate-y-1/2 text-gray-700 right-3" onClick={handleReset}>
        <AiOutlineClose />
      </button>) : null}
    </form>
  );
};

export default SearchForm;
