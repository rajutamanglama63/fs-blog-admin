import React, { createContext, useContext, useState } from 'react'
import { searchBlog } from '../api/blog'
import { Blog } from '../types/types';

type SearchContextData = {
    searchResult: Blog[];
    handleSearch: (name: string, limit: number, offset: number) => any; 
    resetSearch: any
  };
  
  const SearchContext = createContext<SearchContextData>({} as SearchContextData);

const SearchProvider = ({children}: any) => {
    const [searchResult, setSearchResult] = useState([])

    const handleSearch = async (name: string, limit: number, offset: number) => {
        try { 
            const {data}:any = await searchBlog(name, limit, offset)
            console.log("data: ", data)
            setSearchResult(data)
        } catch (error) {
            console.log("err: ", error)
            return error
        }
    }

    const resetSearch = () => {
        setSearchResult([])
    }
    return (
        <SearchContext.Provider value={{searchResult, handleSearch, resetSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider

export const useSearch = () => useContext(SearchContext)
