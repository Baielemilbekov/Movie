import React from 'react';
import {useNavigate} from "react-router-dom";

export default function Card({movie}) {
    const navigate = useNavigate()

    function clickButton() {
        navigate(`/movie-details/${movie.id}`)
    }

    return (
        <div className="w-[220px] h-[326px] bg-[red] p-3 flex items-end rounded-[5px] " style={{
            background: `url(${`https://image.tmdb.org/t/p/w500/${movie.poster_path
            }`}) no-repeat center/contain `
        }}>
            <button className="p-2 bg-[#26567E] w-full text-white rounded-[3px]" onClick={clickButton}>Whatch now
            </button>
        </div>
    );
}

