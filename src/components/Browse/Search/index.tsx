import { IFilterFields, MovieQuery } from "../../../types";
import Button from "../../Button";
import filterFields from "./search_items";


export default function Search({ setQuery }: { setQuery: React.Dispatch<React.SetStateAction<MovieQuery>> }) { // set the query params from search function
    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        // Display the keys
        // for (const key of formData.keys()) {
        //     console.log(`${key}: ${formData.get(key)}`);
        // }
        // setQuery((v)=>({...v, }))
        const newQueryParams: MovieQuery = {}
        for (const [key, value] of formData.entries()) {
            newQueryParams[key as keyof MovieQuery] = value as any;
        }
        setQuery({ ...newQueryParams });
    }
    return (

        <form onSubmit={handleFormSubmit} className="flex justify-center gap-5 bg-bgColor2 py-12 relative">
            <div className="py-5 flex flex-col ">

                <p className="text-xl font-bold text-text2 pb-5">Search Term:</p>

                {/* large search param entry field */}
                <input 
                type="text" 
                name="query_term" 
                id="move" 
                className="outline-none bg-input_gray w-[880px] h-[40px] pl-3 text-text2 rounded-sm"
                // onChange={(event) => setQueryParams(v => ({ ...v, query_term: event.target.value }))}
                />

                {/* select options */}
                <RenderFilterFields filterFields={filterFields} />

            </div>

            <Button className="h-[40px] self-baseline relative -bottom-[66px]" >Search</Button>
            {/* submit button */}
        </form>
    )
}


function RenderFilterFields({ filterFields }: { filterFields: IFilterFields[] }) {
    return (
        <div className="text-text2 text-sm font-semibold gap-y-2.5 pt-5 flex justify-between">
            {
                filterFields.map(
                    ({ displayName, queryName, options }, _) => (
                        <span className="flex flex-col gap-[10px]" key={queryName}>
                            <p>{displayName}</p>
                            <select className="bg-input_gray outline-none pl-4 w-[110px] h-[40px] rounded-sm " name={queryName} >
                                {
                                    options.map(option => <option key={option.value} value={option.value}>{option.displayName}</option>)
                                }
                            </select>
                        </span>)
                )
            }
        </div>

    )

}
