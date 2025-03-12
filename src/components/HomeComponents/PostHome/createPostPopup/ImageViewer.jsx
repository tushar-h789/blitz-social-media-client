import { useRef } from "react";
import EmojiPickers from "./EmojiPickers";
import { CircleCloseIcon } from "../../../../assets/svg/CircleClose";
import { Media } from "../../../../assets/svg/Media";

export default function ImageViewer({
  text,
  setText,
  textRef,
  image,
  setImage,
  setShow,
}) {
  const chooseFile = useRef(null);

  const handleImageUpload = (e) => {
    const file = Array.from(e.target.files);
    file.forEach((img) => {
      if (
        img.type !== "image/jpeg" &&
        img.type !== "image/png" &&
        img.type !== "image/webp" &&
        img.type !== "image/gif"
      ) {
        console.log("image not found");
        return;
      }
      const renderFiles = new FileReader();
      renderFiles.readAsDataURL(img);
      renderFiles.onload = (renderImage) => {
        setImage((images) => [...images, renderImage.target.result]);
      };
    });
  };

  const handleRemoveImage = (indexToRemove) => {
    setImage(image.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <EmojiPickers
        text={text}
        setText={setText}
        textRef={textRef}
        changePart
      />

      <div className="p-2 border border-line_color rounded-md mb-5">
        <div className="w-full h-[400px] bg-white-100 rounded-md relative">
          <input
            type="file"
            multiple
            accept="image/jpeg, image/png, image/webp, image/gif"
            className="hidden"
            ref={chooseFile}
            onChange={handleImageUpload}
          />

          {image && image.length ? (
            <>
              <div className="absolute top-2 left-2 z-10">
                <button
                  onClick={() => chooseFile.current.click()}
                  className="bg-white px-4 py-2 rounded-md font-gilroySemiBold text-sm shadow-md hover:bg-gray-50"
                >
                  Add More Images
                </button>
              </div>
              <div
                className={`${
                  image.length === 1
                    ? "overflow-hidden w-full h-full"
                    : image.length === 2
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2 rounded-xl"
                    : image.length === 3
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2 rounded-xl"
                    : "overflow-y-auto w-full h-full grid grid-cols-2 gap-2 rounded-xl"
                }`}
              >
                {image.map((img, index) => (
                  <div
                    key={index}
                    className={`relative ${
                      image.length > 4 ? "h-[200px]" : "h-full"
                    }`}
                  >
                    <img
                      src={img}
                      alt="img"
                      className={`object-cover w-full h-full rounded-xl ${
                        image.length === 3
                          ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3"
                          : image.length === 4 &&
                            "[&:nth-of-type(1)]:row-start-2 [$:nth-of-type(1)]:row-end-3"
                      }`}
                    />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-2 right-2 text-secondary_color cursor-pointer hover:scale-110 transition-transform"
                    >
                      <CircleCloseIcon />
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="relative flex items-center justify-center h-full">
              <button
                onClick={() => setShow(false)}
                className="absolute top-2 right-2 text-secondary_color cursor-pointer hover:scale-110 transition-transform"
              >
                <CircleCloseIcon />
              </button>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => chooseFile.current.click()}
              >
                <div className="w-10 h-10 rounded-full bg-black cursor-pointer flex items-center justify-center text-white">
                  <Media />
                </div>

                <div className="mt-3">
                  <p className="font-gilroySemiBold text-base text-center">
                    Add Photos/Videos
                  </p>
                  <p className="font-gilroySemiBold text-base text-center">
                    or drag and drop
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
