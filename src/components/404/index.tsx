import { Link } from "react-router-dom";
import Button from "../Button";

export default function PageNotFound() {
  return (
    <div className="bg-bgColor2 flex flex-col justify-center items-center gap-5 text-text1 flex-grow">
        <p className="text-6xl font-bold ">Oops!</p>
        <p>404 - PAGE NOT FOUND</p>
        <p className="text-center max-w-md">The page you are looking for might have been removed, had it's name changed or temporarily unavailable</p>
        <Button><Link to="/">GO TO HOMEPAGE</Link></Button>
    </div>
  )
}