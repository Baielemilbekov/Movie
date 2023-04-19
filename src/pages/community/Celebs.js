import React, {useEffect, useState} from 'react';
import axios from "axios";
import Pagination from "../../components/ui/pagination/pagination";


function Celebs() {
    const [movie, setMovie] = useState();
    const [movies, SetMovies] = useState([]);
    const [page, setPage] = useState(1)


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/popular?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&`)
            .then(({data}) => {
                setMovie(data)
                console.log(data)
            })
    }, [])
    return (
        <>

        <div className="  flex flex-wrap">
                {movie?.results?.map(item => (
                    <div className="">
                        <div className=" w-[200px] h-[400px] rounded-7 mx-4 rounded-[10px]ml-4"
                             style={{background: `url( ${`https://image.tmdb.org/t/p/w1280/${item?.profile_path
                                 }`}) no-repeat center/contain`}}>
                        </div>
                        <h5 className="ml-[50px]">{item?.name}</h5>
                    </div>

                ))}
        </div>
            <div className="w-full">
                <Pagination
                    currentPage={page}
                    allPages={movies.total_pages}
                    onChangePage={(page) => setPage(page)}/>
            </div>
        </>
    )
}

export default Celebs;