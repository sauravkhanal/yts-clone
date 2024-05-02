import { IClassName } from "../../types";

interface IButton extends IClassName {
    url?: string;
    children?: React.ReactNode;
}

export default function Button({ url, className, children }: IButton) {

    // const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=> {
    //     event.preventDefault()
    // }

    return <button
        className={`rounded-[.18rem] bg-accent_green h-9 w-32 font-bold text-base text-white  ${className}`}
    >
        <a href={url}>{children}</a>
    </button>
}