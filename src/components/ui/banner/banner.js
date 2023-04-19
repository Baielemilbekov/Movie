import React from 'react';


export default function Banner  ({movie}) {
    return (
        <div className="w-full h-[430px] bg-[red] rounded-md flex items-end pb-4"
             style={{background:`url(${`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path
                 }`}) no-repeat center/cover`}}
         >
            <div className="flex flex-col pt-[100px] px-2 ">
                <span></span>
                <h4 className="text-white text-4xl">{movie.title}</h4>
                <span className="text-white">{movie.overview?.slice(0,150)}...</span>

                <div className="flex pt-2">
                    <button className="p-2 bg-[#26567E] py-2 px-5 w-[200px] text-white rounded-[3px]">Whatch now</button>
                    <button className="bg-[#696C6F] text-white w-20 h-10 ml-3 font-bold rounded-[3px]">+</button>
                </div>
            </div>
        </div>
    );
}

