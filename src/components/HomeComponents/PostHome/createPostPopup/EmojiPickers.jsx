import { useEffect, useState } from "react";
import Feeling from "../../../../assets/svg/Feeling";
import EmojiPicker from "emoji-picker-react";

export default function EmojiPickers({ text, setText, textRef, changePart }) {
  const [picker, setPicker] = useState(false);
  const [cursorPosition, setCoursorPosition] = useState();

  const handleEmoji = ({ emoji }, e) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(e, ref.selectionStart);
    const end = text.substring(ref.selectionEnd);
    const nextTask = start + emoji + end;
    setText(nextTask);
    setCoursorPosition(start.length + emoji.length);
  };

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  return (
    <div>
      <div className={`${changePart ? "flex justify-between mt-5" : 'mt-5'}`} >
        <textarea
          ref={textRef}
          onChange={(e) => setText(e.target.value)}
          maxLength={100}
          value={text}
          placeholder="What's up, say something"
          className={`${changePart ? "w-[90%] min-h-24 outline-none p-2 font-gilroyNormal text-base" : "w-full min-h-24 outline-none p-2 font-gilroyNormal text-base"}`}
        />

        {
          changePart && <div className="mr-5 cursor-pointer relative">
          <div onClick={() => setPicker((prev) => !prev)}>
            <Feeling />
          </div>
          {picker && (
            <div className="absolute -top-[465px] -right-8">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
        }
      </div>

      {!changePart && (
        <div className="flex justify-between mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-100 to-pink-100 cursor-pointer"></div>

          <div className="mr-5 cursor-pointer relative">
            <div onClick={() => setPicker((prev) => !prev)}>
              <Feeling />
            </div>
            {picker && (
              <div className="absolute -top-[465px] -right-8">
                <EmojiPicker onEmojiClick={handleEmoji} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
