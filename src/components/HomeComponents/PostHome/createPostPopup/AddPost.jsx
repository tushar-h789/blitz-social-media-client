import { CircleProfileIcon } from "../../../../assets/svg/Circleprofile";
import { LiveIcon } from "../../../../assets/svg/Live";
import { Media } from "../../../../assets/svg/Media";

const AddPost = ({ setShow, show }) => {
  console.log(show);
  return (
    <div className="flex items-center justify-between px-2 py-1 border border-line_color rounded-md">
      <span className="font-gilroySemiBold text-black text-base">
        Add to your post
      </span>
      <div className="flex items-center gap-x-3 cursor-pointer">
        <div
          onClick={() => setShow(true)}
          className={`w-10 h-10 hover:bg-white-100 rounded-full flex justify-center items-center transition-all ease-linear duration-100 ${
            show && " text-red-500"
          }`}
        >
          <Media />
        </div>
        <div className="w-10 h-10 hover:bg-white-100 rounded-full flex justify-center items-center transition-all ease-linear duration-100">
          <LiveIcon />
        </div>
        <div className="w-10 h-10 hover:bg-white-100 rounded-full flex justify-center items-center transition-all ease-linear duration-100">
          <CircleProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
