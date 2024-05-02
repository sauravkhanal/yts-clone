import axios, { AxiosResponse } from "axios";
import { Data, MovieQuery, Root } from "../types";

export const getAxios = axios.create({
    baseURL: "https://yts.mx/api/v2"
});

export const getMoviesData = async (query?: MovieQuery):Promise<Data | undefined> => {
    try {
        const response: AxiosResponse<Root> = await getAxios.get("/list_movies.json", {params: query});
        console.log(query)
        console.log("The response is: ")
        console.log(response.data)
        return response.data.data;
        
    } catch (error) {
        console.error("1. Error fetching movies", error);
        return ;
    }
};