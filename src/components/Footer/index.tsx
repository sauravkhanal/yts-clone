export default function Footer() {
	return (
		<div className="flex flex-col items-center text-text2 bg-bgColor2 border-opacity-40 border-t-[0.5px] border-text2 font-semibold text-[13.6px] gap-4 py-5">
			<ul className="flex flex-wrap gap-5 items-center justify-center ">
				<li className="text-text1 text-base "><a href="#">YTS © 2011 - 2024</a></li>
				<li className="hover:text-text1 transition"><a href="#">Blog</a></li>
				<li className="hover:text-text1 transition"><a href="#">DMCA</a></li>
				<li className="hover:text-text1 transition"><a href="#">API</a></li>
				<li className="hover:text-text1 transition"><a href="#">RSS</a></li>
				<li className="hover:text-text1 transition"><a href="#">Contact</a></li>
				<li className="hover:text-text1 transition"><a href="#">Browse Movies</a></li>
				<li className="hover:text-text1 transition"><a href="#">Requests</a></li>
				<li className="hover:text-text1 transition"><a href="#">Login</a></li>
				<li className="hover:text-text1 transition"><a href="#">Language</a></li>
			</ul>
			<ul className="flex flex-wrap gap-2 items-center justify-center">
				<li className="hover:text-text1 transition"><a href="#">EZTV</a></li>
				<li className="hover:text-text1 transition"><a href="#">YIFY Status</a></li>
				<li className="hover:text-text1 transition"><a href="#">YTS Proxies</a></li>
				<li className="hover:text-text1 transition"><a href="#">YTS Proxies (TOR)</a></li>
				<li className="bg-black hover:bg-bgColor1 rounded-full text-text1 px-2 py-1 transition"><a href="#">X Follow @twitter</a></li>
			</ul>
			<p className="text-text1">
				By using this site you agree to and accept our <a href="" className="text-text2">User Agreement</a>, which can be read <a href="" className="text-text2">here.</a>
			</p>
		</div>
	)
}