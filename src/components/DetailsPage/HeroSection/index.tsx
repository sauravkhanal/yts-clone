import HeroImageButton from "./HeroImageButton";
import HeroText from "./HeroText";
import SimilarMovies from "./SimilarMovies";

export default function HeroSection() {
    return <div className="max-w-[1100px] grid grid-cols-3 justify-end items-start">
        <HeroImageButton />
        <HeroText />
        <SimilarMovies className="justify-self-end"/>
    </div>
}