import DirectorAndCast from "./DirectorAndCast";
import Summary from "./Summary";

export default function SummaryAndCast() {
    return (
        <div className="flex justify-center bg-bgColor2 py-5">
            <div className="max-w-[1100px] grid grid-cols-3 bg-bgColor2 gap-5">
                <div className="col-span-2">
                    <Summary />
                </div>
                <DirectorAndCast />
            </div>
        </div>
    );
}
