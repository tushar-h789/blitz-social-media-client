import { CircleCloseIcon } from "../../../../assets/svg/CircleClose";
import AddPost from "./AddPost";
import { useRef, useState } from "react";
import EmojiPickers from "./EmojiPickers";
import ImageViewer from "./ImageViewer";

const CreatePostPopUp = () => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(true);
  const textRef = useRef();

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

          {!show ? (
            <>
              <EmojiPickers text={text} setText={setText} textRef={textRef} />
              <div>
                <AddPost />
              </div>
            </>
          ) : (
            <>
              <ImageViewer text={text} setText={setText} textRef={textRef}/>
              <div>
                <AddPost />
              </div>

            </>
          )}

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
