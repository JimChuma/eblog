import Image from "next/image";
import bolt from "@/app/assets/svg/bolt.svg";

export default function HeaderBannerHeadline() {
  return (
    <div className="banner-headline-div">
      <span>
        <Image src={bolt.src} alt="bolt-icon" width={11} height={16.5}/>
      </span>
      <span className="headline-text">Apple opens its iPhone ecosystem in the EU</span>
    </div>
  );
}
