import Feeling from "../../../assets/svg/Feeling";
import { LiveIcon } from "../../../assets/svg/Live";
import { Media } from "../../../assets/svg/Media";

const PostHome = () => {
  return (
    <div className="mt-10 py-10 bg-white-100 px-6 rounded-lg">
      <div className="flex items-center gap-x-3 w-full p-2 mb-4">
        <div className="w-12 h-12 bg-black rounded-full"></div>
        <input
          type="text"
          placeholder="What's up, say something"
          className="focus:outline-none w-[95%] p-4 rounded-lg"
        />
      </div>
      <div className="border-t-2 border-secondary_color">
        <div className="mt-7 flex items-center gap-x-6 justify-around">
          <div className="w-[33%] flex items-center gap-x-3">
            <LiveIcon />
            <span className="font-gilroyMedium text-base text-black">
              Live Video
            </span>
          </div>
          <div className="w-[33%] flex items-center gap-x-3">
            <Media />
            <span className="font-gilroyMedium text-base text-black">
              Image/Gallery
            </span>
          </div>
          <div className="w-[33%] flex items-center gap-x-3">
            <Feeling />
            <span className="font-gilroyMedium text-base text-black">
              Activities
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHome;
