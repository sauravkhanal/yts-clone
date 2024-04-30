import { IClassName } from "../../types";


export default function LogoText({ className }: IClassName) {
	return (
		<p className={`text text-text2 text-xl pl-2 hidden md:block lg:hidden logoText:block xl:pl-4 ${className}`}>HD movies at the smallest file size.</p>
	)
}
