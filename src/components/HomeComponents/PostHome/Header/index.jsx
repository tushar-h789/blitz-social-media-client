import { useRef, useState } from "react";
import { SearchIcon } from "../../../../assets/svg/SearchIcon";
import SearchBox from "./SearchBox";
import OutSideClick from "../../../../functions/click";

const Header = () => {
  const [show, setShow] = useState(false);
  const clickOutSide = useRef(null)

  OutSideClick(clickOutSide, ()=>{
    setShow(false)
  })


  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-gilroyBold text-2xl text-black">Feeds</h2>
      </div>

      <div className="w-[40%] relative">
        <div
          className="flex items-center border border-secondary_bg py-2 px-4 rounded-full gap-x-2"
          onClick={() => setShow(true)}
        >
            <div className="text-secondary_color cursor-pointer">
              <SearchIcon />
            </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none font-gilroyNormal text-secondary_bg"
            />
          </div>
        </div>
        <div className="shadow-md absolute -top-2 left-0" ref={clickOutSide}>
          {show && <SearchBox />}
        </div>
      </div>
    </div>
  );
};

export default Header;
