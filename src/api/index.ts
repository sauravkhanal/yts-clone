import axios, { AxiosResponse } from "axios";
import { Data, Root } from "../types";

export const getAxios = axios.create({
    baseURL: "https://yts.mx/api/v2"
});

export const getMoviesData = async ():Promise<Data | null> => {
    try {
        const response: AxiosResponse<Root> = await getAxios.get("/list_movies.json");
        console.log("The response is: ")
        console.log(response.data)
        return response.data.data;
        
    } catch (error) {
        console.error("1. Error fetching movies", error);
        return null;
    }
};