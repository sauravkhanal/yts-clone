import Links from "./Links";
import LoginRegister from "./LoginRegister";
import Logo from "./Logo";
import LogoText from "./LogoText";
import SearchBox from "./SearchBox";
import SmallScreenLinkIcons from "./SmallScreenLinkIcons";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
    return (
        <nav className="h-10 md:h-16 bg-bgColor1 flex items-center justify-between px-2
        md:px-10
        lg:px-16
        border-b border-gray-800
        sticky top-0 z-10
        
        ">
            <span className="flex items-center">
                <Logo />
                <LogoText />
            </span>
            <span className="flex items-center gap-5">
                <SearchBox />
                <Links />
                <LoginRegister />
                <SmallScreenLinkIcons />
            <ThemeToggle/>
            </span>
            {/* search field */}


        </nav>
    )
}

