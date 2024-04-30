import { IClassName } from "../../types"

function Logo({ className }: IClassName) {
	return (
		<img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="yts logo"
			className={`h-7 md:h-10 ${className}`} />
	)
}

export default Logo

