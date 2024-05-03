import { IFilterFields } from "../../../types";

const quality: IFilterFields = {
    queryName: "quality",
    displayName: "Quality",
    options:
        [
            { value: "all", displayName: "All" },
            { value: "480p", displayName: "480p" },
            { value: "720p", displayName: "720p" },
            { value: "1080p", displayName: "1080p" },
            { value: "1080p.x265", displayName: "1080p.x265" },
            { value: "2160p", displayName: "2160p" },
            { value: "3D", displayName: "3D" }
        ]
}

const genre: IFilterFields = {
    queryName: "genre",
    displayName: "Genre",
    options:
        [
            { value: "all", displayName: "All" },
            { value: "action", displayName: "Action" },
            { value: "adventure", displayName: "Adventure" },
            { value: "animation", displayName: "Animation" },
            { value: "biography", displayName: "Biography" },
            { value: "comedy", displayName: "Comedy" },
            { value: "crime", displayName: "Crime" },
            { value: "documentary", displayName: "Documentary" },
            { value: "drama", displayName: "Drama" },
            { value: "family", displayName: "Family" },
            { value: "fantasy", displayName: "Fantasy" },
            { value: "film-noir", displayName: "Film-Noir" },
            { value: "game-show", displayName: "Game-Show" },
            { value: "history", displayName: "History" },
            { value: "horror", displayName: "Horror" },
            { value: "music", displayName: "Music" },
            { value: "musical", displayName: "Musical" },
            { value: "mystery", displayName: "Mystery" },
            { value: "news", displayName: "News" },
            { value: "reality-tv", displayName: "Reality-TV" },
            { value: "romance", displayName: "Romance" },
            { value: "sci-fi", displayName: "Sci-Fi" },
            { value: "sport", displayName: "Sport" },
            { value: "talk-show", displayName: "Talk-Show" },
            { value: "thriller", displayName: "Thriller" },
            { value: "war", displayName: "War" },
            { value: "western", displayName: "Western" }
        ]
};

const rating: IFilterFields = {
    queryName: "rating",
    displayName: "minimum_rating",
    options: [
        { value: "0", displayName: "All" },
        { value: "9", displayName: "9+" },
        { value: "8", displayName: "8+" },
        { value: "7", displayName: "7+" },
        { value: "6", displayName: "6+" },
        { value: "5", displayName: "5+" },
        { value: "4", displayName: "4+" },
        { value: "3", displayName: "3+" },
        { value: "2", displayName: "2+" },
        { value: "1", displayName: "1+" }
    ]
}

const year: IFilterFields = {
    queryName: "year",
    displayName: "Year",
    options: [
        { value: "0", displayName: "All" },
        { value: "2024", displayName: "2024" },
        { value: "2023", displayName: "2023" },
        { value: "2022", displayName: "2022" },
        { value: "2021", displayName: "2021" },
        { value: "2020", displayName: "2020" },
        { value: "2010-2019", displayName: "2010-2019" },
        { value: "2000-2009", displayName: "2000-2009" },
        { value: "1990-1999", displayName: "1990-1999" },
        { value: "1980-1989", displayName: "1980-1989" },
        { value: "1970-1979", displayName: "1970-1979" },
        { value: "1950-1969", displayName: "1950-1969" },
        { value: "1900-1949", displayName: "1900-1949" }
    ]
};

const language: IFilterFields = {
    queryName: "language",
    displayName: "Language",
    options: [
        { value: "en", displayName: "English" },
        { value: "all", displayName: "All" },
        { value: "fr", displayName: "French" },
        { value: "ja", displayName: "Japanese" },
        { value: "es", displayName: "Spanish" },
        { value: "it", displayName: "Italian" },
        { value: "de", displayName: "German" },
        { value: "zh", displayName: "Chinese" },
        { value: "ko", displayName: "Korean" },
        { value: "cn", displayName: "Cantonese" },
    ]
};

const orderBy: IFilterFields = {
    queryName: "order_by",
    displayName: "Order By",
    options: [
        { value: "latest", displayName: "Latest" },
        { value: "oldest", displayName: "Oldest" },
        { value: "featured", displayName: "Featured" },
        { value: "seeds", displayName: "Seeds" },
        { value: "peers", displayName: "Peers" },
        { value: "year", displayName: "Year" },
        { value: "rating", displayName: "IMDb Rating" },
        { value: "likes", displayName: "YTS Likes" },
        { value: "rt_audience", displayName: "RT Audience" },
        { value: "alphabetical", displayName: "Alphabetical" },
        { value: "downloads", displayName: "Downloads" }
    ]
};


const items = [quality, genre, rating, year, language, orderBy]

export default items