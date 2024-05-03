import { useNavigate } from "react-router-dom"
import { IClassName } from "../../types"

function Logo({ className }: IClassName) {
	const navigator = useNavigate()
	return (
		<img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="yts logo"
			className={`h-7 md:h-10 cursor-pointer active:scale-90 transition ${className}`} onClick={()=>navigator("/")}/>
	)
}

export default Logo

