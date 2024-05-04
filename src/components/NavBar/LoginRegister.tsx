import { IClassName } from "../../types";

export default function LoginRegister({ className }: IClassName) {
	return (
		<ul className={`hidden lg:flex gap-1 text-sm text-text1 font-bold ${className}`}>
			<li>
				<a href="" className="hover:text-text2 transition-colors duration-300">Login</a>
			</li>
			<li className="font-normal">|</li>
			<li>
				<a href="" className="hover:text-text2 transition-colors duration-300">Register</a>
			</li>
		</ul>
	)
}