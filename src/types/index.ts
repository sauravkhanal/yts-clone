export interface IClassName {
    className?: string
}

// https://yts.mx/api/v2/list_movies.json

export interface Root {
    status: string
    status_message: string
    data: Data
    "@meta": Meta
}

export interface Data {
    movie_count: number
    limit?: number
    page_number?: number
    movies: Movie[]
}

export interface Movie {
    id: number
    url: string
    imdb_code: string
    title: string
    title_english: string
    title_long: string
    slug: string
    year: number
    rating: number
    runtime: number
    genres?: string[]
    summary: string
    description_full: string
    synopsis: string
    yt_trailer_code: string
    language: string
    mpa_rating: string
    background_image: string
    background_image_original: string
    small_cover_image: string
    medium_cover_image: string
    large_cover_image: string
    state: string
    torrents: Torrent[]
    date_uploaded: string
    date_uploaded_unix: number
}

export interface Torrent {
    url: string
    hash: string
    quality: string
    type: string
    is_repack: string
    video_codec: string
    bit_depth: string
    audio_channels: string
    seeds: number
    peers: number
    size: string
    size_bytes: number
    date_uploaded: string
    date_uploaded_unix: number
}

export interface Meta {
    server_time: number
    server_timezone: string
    api_version: number
    execution_time: string
}


export interface MovieQuery {
    limit?: number; // Integer between 1 - 50 (inclusive)
    page?: number; // Integer (Unsigned)
    quality?: '480p' | '720p' | '1080p' | '1080p.x265' | '2160p' | '3D'; // String (480p, 720p, 1080p, 1080p.x265, 2160p, 3D)
    minimum_rating?: number; // Integer between 0 - 9 (inclusive)
    query_term?: string; // String
    genre?: string; // String
    sort_by?: 'title' | 'year' | 'rating' | 'peers' | 'seeds' | 'download_count' | 'like_count' | 'date_added'; // String (title, year, rating, peers, seeds, download_count, like_count, date_added)
    order_by?: 'desc' | 'asc'; // String (desc, asc)
    with_rt_ratings?: boolean; // Boolean
}


export interface SelectOption {
    value: string;
    text: string;
}

export interface PaginationDetails {
    movie_count: number;
    page_number: number;
    limit: number;
    setQuery: React.Dispatch<React.SetStateAction<MovieQuery>>;
}


export interface Cast {
    name: string
    character_name: string
    url_small_image?: string
    imdb_code: string
}

export interface MovieDetail {
    id: number
    url: string
    imdb_code: string
    title: string
    title_english: string
    title_long: string
    slug: string
    year: number
    rating: number
    runtime: number
    genres: string[]
    like_count: number
    description_intro: string
    description_full: string
    yt_trailer_code: string
    language: string
    mpa_rating: string
    background_image: string
    background_image_original: string
    small_cover_image: string
    medium_cover_image: string
    large_cover_image: string
    medium_screenshot_image1: string
    medium_screenshot_image2: string
    medium_screenshot_image3: string
    large_screenshot_image1: string
    large_screenshot_image2: string
    large_screenshot_image3: string
    cast: Cast[]
    torrents: Torrent[]
    date_uploaded: string
    date_uploaded_unix: number
}

interface IMovies {
    movie: MovieDetail
}

export interface MovieDetailRoot extends Omit<Root, 'data'> {
    data: IMovies
}

export interface MovieSuggestionData {
    movie_count: number
    movies: Movie[]
}

export interface SuggestionRoot extends Omit<Root, 'data'> {
    data: MovieSuggestionData
}

interface IdAndImage { id: string, small_cover_image: string }

export interface SimilarMoviesImage {
    id: number, small_cover_image: string
}


export interface IFilterFields {
    queryName: string;
    displayName: string;
    options: { value: string, displayName: string }[]
}