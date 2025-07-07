import { Input } from "@/components/ui/input"
import Logo from "../Logo"
import RedirectButton from "./RedirectButton"

const Header = () => {
    return (
        <div className="
          flex
          flex-row
          justify-between
          items-center
          h-[60px]
          px-[20px]
          lg:px-[40px]

          bg-red-500
        ">
            {/* Logo start */}
            <div className="w-full ">
                <Logo />
            </div>
            {/* Logo end */}

            {/* Search start */}
            <div className="
            w-full
            hidden
            lg:block
            ">
                <Input
                    className="
                border-t-transparent
                border-r-transparent
                border-l-transparent
                border-b
                border-b-black
                rounded-none
                text-center
                placeholder:text-black
                text-xs
                focus-visible:outline-none
                focus-visible:ring-0
                focus-visible:ring-transparent
                focus-visible:border-t-transparent
                focus-visible:border-r-transparent
                focus-visible:border-l-transparent
                focus-visible:border-b
                focus-visible:border-b-black
                focus:border-black
                "
                    placeholder="ARA" />
            </div>
            {/* Search end */}

            {/* Links start */}
            <div className="
            flex
            items-center
            justify-end
            w-full
           
            ">
                <div className="mr-4 hidden lg:block">
                    <RedirectButton href="/" title="GIRIS YAPIN" />
                </div>
                <div className="hidden lg:block">
                    <RedirectButton href="/" title="SEPETIM" />
                </div>
            </div>
            {/* Links end */}

            {/* mobile start */}
            <div className="mr-6 lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[14px] h-[14px]"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </div>

            <div className="mr-6 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] h-[14px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>

            <div className="lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] h-[14px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </div>


            {/* mobile end */}
        </div>
    )
}

export default Header