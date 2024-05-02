import { SelectOption } from "../../../types";

export default function Select({ options }: { options: SelectOption[] }) {
    return (
        <select  className="bg-input_gray outline-none pl-3 w-[110px] h-[40px] rounded-sm">
            {
                options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)
                // options.map(({value, text}) => <option key={value} value={option.value}>{text}</option>)
            }
        </select>
    )
}