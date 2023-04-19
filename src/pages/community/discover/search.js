import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spiner from "../../../svg/img/spiner";
import Banner from "../../../components/ui/banner/banner";
import Card from "../../../components/ui/card/card";
import TvShow from "../../../components/TvShow/TvShow";
import Anime from "../../../components/Anime/Anime";
import Pagination from "../../../components/ui/pagination/pagination";
import {useSearchParams} from "react-router-dom";



export default function Search() {
    const [movies, SetMovies] = useState([]);
    const [selectedTab, SetSelectedTAb] = useState(0)
    const [oneMovie, setOneMovie] = useState({})
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState()
    const [searchString] = useSearchParams()
    const search = searchString.get("search")

    useEffect(() => {
        setLoading(true)
        getPopularMovies();
    }, [page, search])


    function getPopularMovies() {
        const randomNumber = Math.floor(Math.random() * 20)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f42c53f4f985e0480ab807c5d464b681&query=${search}&page=${page}&language=ru-RU`)
            .then(({data}) => {
                SetMovies(data);
                setLoading(false)
                setOneMovie(data.results[randomNumber]);
                console.log(data)
            });
    }

    const tabItems = ["Movie", "TV Show", "Anime"]

    function selectTab(index) {
        SetSelectedTAb(index)
    }

    return (
        <div className="ml-10">
            <div className=" gap-4 mt-4 ml-3">
                {tabItems.map((tabItems, index) => (
                    <span className="cursor-pointer text-xl m-2"
                          style={{color: index === selectedTab ? "black" : "#A0ADBA"}}
                          onClick={() => selectTab(index)}>{tabItems}</span>
                ))}
                {loading ? <Spiner/> : selectedTab === 0 &&
                    <>
                        <div className="mt-9">
                            <Banner movie={oneMovie}/>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center mt-5">
                            {movies?.results?.map((movie) => (
                                <Card movie={movie}/>
                            ))}
                        </div>

                    </>

                }
                {selectedTab === 1 &&
                    <>
                        <TvShow/>
                    </>
                }
                {selectedTab === 2 &&
                    <>
                        <Anime/>
                    </>
                }
            </div>
            <Pagination
                currentPage={page}
                allPage={movies.total_pages}
                onChangePage={(page) => setPage(page)}/>
        </div>
    );
}