import MovieSection from "./MovieSection";

export default function Home() {
    return (
        <>
            <MovieSection title="Latest YIFY Movies Torrents" sort_by="date_added" bgColor="bg-bgColor2"/>
            <MovieSection title="Top Rated" sort_by="rating" bgColor="bg-bgColor1"/>
            <MovieSection title="Most Downloaded" sort_by="download_count" bgColor="bg-bgColor2"/>
            <MovieSection title="Most Liked" sort_by="like_count" bgColor="bg-bgColor1"/>
            
        </>
    )
}


            // <section className="bg-bgColor2 flex flex-col items-center">
            //     <span className="flex justify-between w-4/5 py-10">
            //         <p className=" font-bold text-text1  ">Latest YIFY Movies Torrents</p>
            //         <Link to="/browse-movies" className="text-text2">Browse all</Link>
            //     </span>
            //     {/* latest movies */}
            //     {/* <MovieCards className="grid grid-cols-4 gap-x-16 gap-y-4" /> */}
            //     <LatestMovie />
            // </section>