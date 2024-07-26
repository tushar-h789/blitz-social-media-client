import { useRef, useState } from "react";
import { SearchIcon } from "../../../../assets/svg/SearchIcon";
import SearchBox from "./SearchBox";
import OutSideClick from "../../../../functions/click";
import { LeftData } from "../../LeftPart/Data";
import LeftHomeData from "../../LeftPart/LeftHomeData";

const Header = () => {
  const [show, setShow] = useState(false);
  const clickOutSide = useRef(null);

  OutSideClick(clickOutSide, () => {
    setShow(false);
  });

  return (
    <div className="flex items-center justify-between">
      <div className="w-[20%]">
        <h2 className="font-gilroyBold text-2xl text-black hidden lg:block">
          Feeds
        </h2>
        <div className="w-16 h-16 bg-cyan-100 rounded-full mx-auto lg:hidden"></div>
      </div>

      <div className="lg:hidden flex items-center justify-center gap-x-[10px] w-[60%]">
        {
          LeftData.map((data, index)=>{
            return(
              <LeftHomeData key={index} data={data}/>
            )
          })
        }
      </div>

      <div className="w-[20%] lg:w-[40%] relative">
        <div
          className="flex w-10 h-10 lg:w-[300px] lg:h-auto ml-auto lg:ml-0 items-center justify-center border border-secondary_bg lg:py-2 lg:px-4 rounded-full gap-x-2 relative"
          onClick={() => setShow(true)}
        >
          <div className="text-secondary_color cursor-pointer absolute top-2 left-2">
            <SearchIcon />
          </div>
          <div>
            <input
              type="text"
              className="focus:outline-none font-gilroyNormal text-secondary_bg w-full rounded-full"
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
