import logo from "@/app/assets/svg/logo.svg"
import Image from "next/image"

export default function Logo() {
    return <div>
        <Image src={logo.src} alt="eblog" width={103} height={20}/>
    </div>
}