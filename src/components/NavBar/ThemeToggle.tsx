import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

export default function ThemeToggle() {
    const [colorMode, setColorMode] = useState<string>(() => {
        // first get system color scheme
        const preferredColorScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

        // priority order of color scheme, 1.saved in local storage, 2. system color scheme , 3. light mode
        const theme = localStorage.getItem("theme") || preferredColorScheme || "light"
        document.documentElement.setAttribute("theme", theme)
        return theme

    })

    const handleClick = () => {
        const newTheme = colorMode === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("theme", newTheme)
        setColorMode(newTheme)
        localStorage.setItem("theme", newTheme)
    };

    const theme = localStorage.getItem("theme");
    const isDarkTheme = theme === "dark";
    const icon = isDarkTheme ?
        <div className="h-full w-full bg-text1 flex justify-center items-center">

            <IoMdSunny className="text-black group-hover:scale-125 transition " />
        </div>
        :
        <div className="h-full w-full bg-black flex justify-center items-center">
            <FaMoon className="text-text1 group-hover:scale-125 transition" />;
        </div>
    return (
        <button className={` overflow-hidden group rounded-md bg-${isDarkTheme ? "text1" : "black"}  transition-all duration-300 opacity-80 hover:opacity-100 h-6 w-6 md:h-8 md:w-12 lg:w-14`} onClick={handleClick}>
            {icon}
        </button>
    );
}
