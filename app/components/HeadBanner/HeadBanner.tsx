import HeaderBannerHeadline from "./sub-components/HeadBannerHeadline";
import SocialMediaHandles from "./sub-components/SocialMediaHandles";
import SubscribeLogin from "./sub-components/SubscribeLogin";

export default function HeaderBanner() {
  return (
    <div className="head-banner-div">
      <div className="box">
        <SocialMediaHandles />
        <HeaderBannerHeadline />
        <SubscribeLogin />
      </div>
    </div>
  );
}
