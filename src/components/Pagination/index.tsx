import { PaginationDetails } from "../../types";
import Button from "../Button";
import calculatePaginationRange from "../../utils/CalculatePaginationRange";

export default function Pagination({ movie_count, limit, page_number, setQuery }: PaginationDetails) {
    const totalPages: number = Math.round(movie_count / limit);
    const IndexToShow: number[] = calculatePaginationRange(page_number, totalPages);

    const isSinglePage: boolean = totalPages <= 1;

    function handleClick(new_page_number: number) {
        setQuery(val => ({ ...val, page: new_page_number }));
    }

    function handlePrevious() {
        setQuery(val => ({ ...val, page: page_number - 1 }));
    }

    function handleNext() {
        setQuery(val => ({ ...val, page: page_number + 1 }));
    }

    return (
        !isSinglePage && (
            <div className="flex gap-2 py-10">
                <Button variant="outline" disabled={page_number === 0} onClick={handlePrevious}>
                    Prev
                </Button>
                {IndexToShow.map(value => (
                    <Button
                        key={value}
                        variant={value === page_number ? undefined : "outline"}
                        onClick={() => handleClick(value)}
                    >
                        {value}
                    </Button>
                ))}
                <Button
                    variant="outline"
                    disabled={page_number === totalPages - 1}
                    onClick={handleNext}
                >
                    Next
                </Button>
            </div>
        )
    );
}
