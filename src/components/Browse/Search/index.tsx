import Button from "../../Button";
import Select from "../Select";
// import { MovieQuery } from "../../../types";
import { qualityOptions, genreOptions, ratingOptions, yearOptions, languageOptions, orderByOptions } from "./search_items";

export default function Search({ setQuery }: any) { // set the query params from search function
    return (
        <div className="flex justify-center gap-5 bg-bgColor2 py-12 relative">

            <div className="py-5 flex flex-col ">

                <p className="text-xl font-bold text-text2 pb-5">Search Term:</p>

                <input type="text" name="movie" id="move" placeholder=""
                    className="outline-none bg-input_gray w-[880px] h-[40px] pl-3 text-text2 rounded-sm"
                />
                
                {/* select options */}
                <div className="text-text2 text-sm font-semibold gap-y-2.5 pt-5 flex justify-between">
                    <span className="flex flex-col gap-[10px]">
                        <p>Quality:</p>
                        <Select options={qualityOptions} />
                    </span>
                    <span className="flex flex-col gap-[10px]">
                        <p>Genre:</p>
                        <Select options={genreOptions} />
                    </span>
                    <span className="flex flex-col gap-[10px]">
                        <p>Rating:</p>
                        <Select options={ratingOptions} />
                    </span>
                    <span className="flex flex-col gap-[10px]">
                        <p>Year:</p>
                        <Select options={yearOptions} />
                    </span>
                    <span className="flex flex-col gap-[10px]">
                        <p>Language:</p>
                        <Select options={languageOptions} />
                    </span>
                    <span className="flex flex-col gap-[10px]">
                        <p>Order By:</p>
                        <Select options={orderByOptions} />
                    </span>
                </div>

            </div>

            <Button className="h-[40px] self-baseline relative -bottom-[66px]">Search</Button>
        </div>
    )
}


// {/* <button onClick={() => {
// setQuery({ limit: 5 });
// console.log("btn is clicked")
// }} className="bg-white">click me</button> */}