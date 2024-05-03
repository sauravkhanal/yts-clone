import { IClassName } from "../../types";

interface IButton extends IClassName {
    url?: string;
    children?: React.ReactNode;
    variant?: "outline" | "normal";
    // disabled?: "boolean";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    [key: string]: any;
}

export default function Button({ variant, url, className, children, onClick, ...rest }: IButton) {


    return <>

        {
            variant === "outline" ?
                <button
                    className={`rounded-[.18rem] bg-transparent font-bold text-base text-white hover:bg-accent_green transition border border-text2 px-3 py-1  
                    disabled:opacity-50 disabled:hover:bg-transparent
                    active:scale-110
                    ${className} `}
                    {...rest}
                    onClick={onClick}
                >
                    {/* <a href={url}>{children}</a> */}
                    {children}
                </button>
                :
                <button
                    className={`rounded-[.18rem] bg-accent_green px-4 py-[6px] font-bold text-base text-white hover:opacity-80 transition  
                    disabled:opacity-50 disabled:hover:bg-transparent
                    active:scale-110
                    ${className}`}
                    {...rest}
                    onClick={onClick}
                >
                    {/* <a href={url}>{children}</a> */}
                    {children}
                </button>
        }
    </>
}