import EmojiPicker from "emoji-picker-react";
import { CircleCloseIcon } from "../../../../assets/svg/CircleClose";
import AddPost from "./AddPost";
import { useState } from "react";
import Feeling from "../../../../assets/svg/Feeling";

const CreatePostPopUp = () => {
  const [picker, setPicker] = useState(false);
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center bg-blur w-full h-screen z-20">
      <div className="w-[35%] bg-white shadow-lg rounded-lg">
        <div className="border-b border-white-100 py-2 relative">
          <h2 className="font-gilroyBold text-lg text-black text-center">
            Create Post
          </h2>
          <div className="absolute top-1 right-2 text-secondary_color cursor-pointer">
            <CircleCloseIcon />
          </div>
        </div>

        <div className="px-3 py-4">
          <div className="flex items-center gap-x-3">
            <div className="bg-black w-12 h-12 rounded-full"></div>
            <div>
              <h4 className="font-gilroySemiBold text-base text-black">
                Tushar Imran
              </h4>
            </div>
          </div>

          <div className="mt-5">
            <textarea
              placeholder="What's up, say something"
              className="w-full min-h-24 outline-none p-2 font-gilroyNormal text-base"
            />
          </div>

          <div className="flex justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-100 to-pink-100 cursor-pointer"></div>
            <div className="mr-5 cursor-pointer relative">
              <div onClick={()=>setPicker(prev =>!prev)}>
              <Feeling />
              </div>
              {picker && (
                <div className="absolute -top-[465px] -right-8">
                  <EmojiPicker />
                </div>
              )}
            </div>
          </div>

          <div>
            <AddPost />
          </div>
          <div className="mt-2">
            <button className="w-full bg-white-100 hover:bg-black hover:text-white transition-all ease-linear duration-100 p-2 font-gilroySemiBold text-black text-base rounded-md">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPopUp;
