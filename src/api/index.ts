import axios, { AxiosResponse } from "axios";
import { Data, MovieDetailRoot, MovieQuery, Root } from "../types";
import {  SRoot } from "../types/SimilarMovies";

export const getAxios = axios.create({
    baseURL: "https://yts.mx/api/v2"
});

export const getMoviesData = async (query?: MovieQuery): Promise<Data | undefined> => {
    try {
        const response: AxiosResponse<Root> = await getAxios.get("/list_movies.json", { params: query });
        // console.log(query)
        // console.log("The response is: ")
        // console.log(response.data)
        return response.data.data;

    } catch (error) {
        console.error("1. Error fetching movies", error);
        return;
    }
};


export const getMovieDetail = async (id: number): Promise<MovieDetailRoot | undefined> => {
    try {
        const response = await getAxios.get("/movie_details.json", {
            params: { with_images: true, with_cast: true, movie_id: id }
        })
        // console.log("Getting movie detail , the response is")
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.error("2. Error fetching movies", error);
        return;
    }
}


export const getSimilarMovie = async (movie_id?: number) => {
    try {
        if (movie_id) {

            const response: SRoot = await getAxios.get("/movie_suggestions.json", {
                params: { movie_id: movie_id }
            });
            // console.log("Response from getSimilarMovie:", response.data.data);
            return (response.data.data.movies.map((movie, _) => ({ id: movie.id, img: movie.medium_cover_image })))
        }
    } catch (error) {
        console.error("3. Error fetching similar movies", error);
        return;
    }
};
