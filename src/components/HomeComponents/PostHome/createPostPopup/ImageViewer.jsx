
import EmojiPickers from './EmojiPickers'

export default function ImageViewer({text, setText, textRef}) {
  return (
    <div>
      <EmojiPickers text={text} setText={setText} textRef={textRef} changePart/>
    </div>
  )
}
