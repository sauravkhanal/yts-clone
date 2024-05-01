import { useEffect, useState } from "react"
import { getMoviesData } from "../../api"
import { Data, IClassName } from "../../types"
import FilmCard from "../FilmCard"

export default  function MovieCards({className}: IClassName) {
    const [moviesData, setMoviesData] = useState<Data | null>(null);

    useEffect(()=>{
        async function fetchData () {
            const data = await getMoviesData();
            console.log("The received data is ")
            console.log(data)
            setMoviesData(data);
        }
        fetchData();
    }, []);

    return (
        <div className={className}>
            {
                moviesData?.movies.map((data, index) => <FilmCard  {...data} id={index}/>)
            }
        </div>
    )
}