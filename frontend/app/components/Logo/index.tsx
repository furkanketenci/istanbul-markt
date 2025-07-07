import Image from "next/image"

const Logo = () => {
    return (
        <Image
            src="/logo.svg"
            width={132}
            height={20}
            alt="logo"
        />

    )
}
export default Logo