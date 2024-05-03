export interface SRoot {
    data: SData
    status: number
    statusText: string
    headers: Headers
    config: Config
    request: Request
  }
  
  export interface SData {
    status: string
    status_message: string
    data: SData2
    "@meta": Meta
  }
  
  export interface SData2 {
    movie_count: number
    movies: SMovie[]
  }
  
  export interface SMovie {
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
    state: string
    torrents: Torrent[]
    date_uploaded: string
    date_uploaded_unix: number
  }
  
  export interface Torrent {
    url: string
    hash: string
    quality: string
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
  
  export interface Headers {
    "cache-control": string
    "content-type": string
    expires: string
    pragma: string
  }
  
  export interface Config {
    transitional: Transitional
    adapter: string[]
    transformRequest: any[]
    transformResponse: any[]
    timeout: number
    xsrfCookieName: string
    xsrfHeaderName: string
    maxContentLength: number
    maxBodyLength: number
    env: Env
    headers: Headers2
    baseURL: string
    params: Params
    method: string
    url: string
  }
  
  export interface Transitional {
    silentJSONParsing: boolean
    forcedJSONParsing: boolean
    clarifyTimeoutError: boolean
  }
  
  export interface Env {}
  
  export interface Headers2 {
    Accept: string
  }
  
  export interface Params {
    movie_id: number
  }
  
  export interface Request {}
  