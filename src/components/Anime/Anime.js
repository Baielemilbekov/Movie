 import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "../ui/card/card";


 export default function Anime() {
     const [movie, setMovie] = useState();

     useEffect(() => {
         axios(`https://api.themoviedb.org/3/tv/popular?api_key=f42c53f4f985e0480ab807c5d464b681&language=ru-RU&page=9`)
             .then(({data}) => {
                 setMovie(data)
                 console.log(data)
             })
     }, [])
     return (
         <div className="flex flex-wrap">
             {movie?.results?.map(item => (
                 <>
                     <Card movie={item}/>
                 </>
             ))}
         </div>
     )
 }