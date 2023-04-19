import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
const MoveDetals = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState()
    const [credits, setCredits] = useState()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU`)
            .then(({data}) => {
                setCredits(data)
                console.log("setMovie", data)
            });

        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU`)
            .then(({data}) => {
                setMovie(data)
                console.log(data)
            })
    }, [id])
    return (
        <div>
            <div className="pl-[39px]">
                <div className="movie w-[989px] h-[600px] rounded-7 position-relative blur-sm"
                     style={{background: `url( ${`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}) no-repeat center/contain`}}
                ></div>
                <div className="flex  position-absolute top-[100px] ml-2 "><img className="rounded-9 w-[300px] "
                                                                                src={`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}
                                                                                alt="img"/>
                    <div><h2 className="text-white ml-[100px]">                        {movie?.title}
                    </h2>                    <p className="w-[600px] ml-[100px] text-white">{movie?.overview}</p>
                        <p className="ml-[100px] text-white">{`Дата выхода.${movie?.release_date}`}</p>
                        <p className="ml-[100px] text-white">{`Популярность.${movie?.popularity}`}</p><p
                            className="ml-[100px] text-white">{`Жанр.${movie?.genres[0]?.name}`}</p>
                        <button className=" ml-[100px] bg-[#26567E] px-5 py-3  text-white rounded-[3px]">Watch traller
                        </button>
                    </div>
                </div>
            </div>
            <div className=" ml-[50px] py-4">
                <h4>В Главных Роллях</h4>
                <div className="flex max-w-[980px] overflow-x-scroll">
                    {credits?.cast.map((credits, index) =>
                        credits.profile_path && (
                            <div className=' w-[350px] min-w-[190px] border-none'>
                                <img
                                    src={`https://image.tmdb.org/t/p/w1280/${credits?.profile_path
                                    } `}
                                    className="w-[250px] rounded-[15px] px-2"/>
                                <h5 className="px-2.5">{credits?.name}</h5>
                            </div>
                        ))}
                </div>
            </div>
        </div>);
};
export default MoveDetals;
