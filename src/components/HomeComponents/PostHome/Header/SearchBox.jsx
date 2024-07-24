import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "../../../../assets/svg/SearchIcon";

const SearchBox = () => {
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const inputBox = useRef(null);

  useEffect(() => {
    inputBox.current.focus();
  }, []);

  return (
    <div className="h-[400px] w-[300px] bg-white box-border shadow-md rounded-md min-h-[400px] max-h-[70vh] p-2">
      <div className="flex items-center border border-secondary_bg  py-2 px-4 rounded-full gap-x-2">
        {showSearchIcon && (
          <div
            className="text-secondary_color cursor-pointer "
            onClick={() => inputBox.current.focus()}
          >
            <SearchIcon />
          </div>
        )}
        <div>
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none font-gilroyNormal text-secondary_bg"
            ref={inputBox}
            onFocus={() => setShowSearchIcon(false)}
            onBlur={() => setShowSearchIcon(true)}
          />
        </div>
      </div>
      <div className="mt-3">
        <p className="font-gilroySemiBold text-sm text-black">
          Recent Searches
        </p>
      </div>
    </div>
  );
};

export default SearchBox;
