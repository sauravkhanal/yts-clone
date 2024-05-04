import { useNavigate } from "react-router-dom";
import { Movie } from "../../../types";

export default function QuickSearchResult({ details, className }: { details?: Movie[], className?: string }) {
    const navigate = useNavigate();

    function handleClick(id: number) {
        navigate(`/details/${id}`);
    }

    function QuickSearchItemCard(detail: Movie) {
        return (
            <div
                className="flex gap-3 p-3  bg-bgColor2 hover:bg-bgColor1  border border-t-0 border-border1 border-opacity-10 cursor-pointer"
                key={detail.id.toString()}
                onClick={() => handleClick(detail.id)}
            >
                <img src={detail.medium_cover_image} alt="cover image" className="h-16" />
                <div className="flex flex-col gap-3">
                    <p className="text-text1 font-semibold text-sm">{detail.title.slice(0, 35)}</p>
                    <p className="text-text2 text-xs">{detail.year}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`flex flex-col ${className}`}>
            {details?.map((value) => QuickSearchItemCard(value))}
        </div>
    );
}
