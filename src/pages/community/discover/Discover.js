import React from "react";
import {useSearchParams} from "react-router-dom";
import Search from "./search"
import Home from "../../home/home";

function Discover() {
    let [searchParams,setSearchParams] = useSearchParams();

    function searchMovies(value){
        setSearchParams(`search=${value}`)
    }
    const searchValue = searchParams.get("search")
    return (
        <div className="w-full ">
            <div className="w-full px-2 pt-3 flex">
                <input
                type="search" placeholder="Найти Филмы Аниме.... "
                className="w-[55%] px-3 py-3 border-2 border-solid border-[blue] rounded-9 ml-8 outline-none position-absolute"
                onChange={(e) => searchMovies(e.target.value)}
                value={searchValue}/>
                <button className=" bg-[blue] text-white rounded-[20px] w-[150px] h-[50px] position-relative ml-[72%] mt-1">Искать</button>
            </div>
            {searchValue ? <Search/> : <Home/>}
        </div>
    );
}

export default Discover;