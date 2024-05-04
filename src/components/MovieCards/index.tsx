import { Movie } from "../../types"
import FilmCard from "../FilmCard"

interface IMovieCards {
    data?: Movie[];
    className?: string;
}

export default function MovieCards({ data, className }: IMovieCards) {
    // const [moviesData, setMoviesData] = useState<Movie[]>(data);


    // useEffect(()=>{
    //     async function fetchData () {
    //         const data = await getMoviesData(query);
    //         // console.log("The received data is ")
    //         // console.log(data)
    //         setMoviesData(data);
    //     }
    //     fetchData();
    // }, []);

    return (
        <div className={className}>
            {
                data?.map((data, _) => <FilmCard  {...data} key={data.id.toString()} />)
            }
        </div>
    )
}