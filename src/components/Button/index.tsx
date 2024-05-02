import { IClassName } from "../../types";

interface IButton extends IClassName {
    url?: string;
    children?: React.ReactNode;
    variant?: "outline"
}

export default function Button({ variant, url, className, children }: IButton) {

    // const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=> {
    //     event.preventDefault()
    // }

    return <>
        {/* <button
            className={`rounded-[.18rem] bg-accent_green h-9 w-32 font-bold text-base text-white hover:opacity-80 transition  ${className}`}
        >
            <a href={url}>{children}</a>
        </button> */}
        {
            variant === "outline" ?
                <button
                    className={`rounded-[.18rem] bg-transparent font-bold text-base text-white hover:bg-accent_green transition border border-text2 px-3 py-1  ${className}`}
                >
                    <a href={url}>{children}</a>
                </button>
                :
                <button
                    className={`rounded-[.18rem] bg-accent_green px-4 py-[6px] font-bold text-base text-white hover:opacity-80 transition  ${className}`}
                >
                    <a href={url}>{children}</a>
                </button>
        }
    </>
}