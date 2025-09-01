import HeroMobile from "../assets/images/image-hero-mobile.png";
import HeroDesktop from "../assets/images/image-hero-desktop.png";
import DataBiz from "../assets/images/client-databiz.svg";
import AudioPhile from "../assets/images/client-audiophile.svg";
import Meet from "../assets/images/client-meet.svg";
import Maker from "../assets/images/client-maker.svg";

const Content = () => {
  return (
    <div className="md:flex md:mt-10 md:w-4/5 md:mx-auto md:gap-10">
      <div className="md:flex-1">
        <img src={HeroMobile} className="md:hidden" alt="hero-mobile" />
        <div className="text-center md:text-left px-4 py-15 md:py-10 space-y-6">
          <h1 className="md:text-6xl md:w-[88%]">Make remote work</h1>
          <p className="text-lg w-[95%] md:w-4/5 md:mx-0 mx-auto text-gray-800">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals and watch productivity soar.
          </p>
          <button className="text-xl font-semibold bg-black text-white rounded-2xl py-3 px-8 hover:bg-white hover:text-black border border-black transition-colors cursor-pointer">
            Learn more
          </button>
        </div>
        <div className="flex justify-between items-center p-4 gap-2 overflow-x-auto mb-6">
          <img src={DataBiz} alt="databiz-img" />
          <img src={AudioPhile} alt="audio-phile-img" />
          <img src={Meet} alt="meet-img" />
          <img src={Maker} alt="maker-img" />
        </div>
      </div>
      <div className="md:flex-1">
        <img
          src={HeroDesktop}
          className="hidden md:block max-h-[475px] mx-auto"
          alt="hero-desktop"
        />
      </div>
    </div>
  );
};

export default Content;
