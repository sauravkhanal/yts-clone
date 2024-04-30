import Links from "./Links";
import LoginRegister from "./LoginRegister";
import Logo from "./Logo";
import LogoText from "./LogoText";
import SearchBox from "./SearchBox";
import SmallScreenLinkIcons from "./SmallScreenLinkIcons";

export default function NavBar() {
    return (
        <nav className="h-10 md:h-16 bg-bgColor1 flex items-center justify-between px-2
        md:px-10
        lg:px-20
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
            </span>
            {/* search field */}

        </nav>
    )
}

