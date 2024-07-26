import { useState } from "react";
import { Logout } from "../../../../assets/svg/Logout";
import { Moon } from "../../../../assets/svg/Moon";
import DisplayMode from "./DisplayMode";

const SettingOptions = () => {
  const [visible, setVisible] = useState(false);

  if (visible) {
    return <DisplayMode setVisible={setVisible} />;
  }

  return (
    <div className="bg-white rounded-md shadow-md w-[300px] p-4 absolute left-0">
      <ul>
        <li
          className="flex items-center gap-x-2 group cursor-pointer mb-5"
          onClick={() => setVisible(true)}
        >
          <div className="w-8 h-8 bg-white-100 rounded-full flex items-center justify-center">
            <Moon />
          </div>
          <div>
            <p className="font-gilroyBold text-base text-black group-hover:text-secondary_color transition-all ease-linear duration-75">
              Display & Accessability
            </p>
          </div>
        </li>
        <li className="flex items-center gap-x-2 group cursor-pointer">
          <div className="w-8 h-8 bg-white-100 rounded-full flex items-center justify-center">
            <Logout />
          </div>
          <div>
            <p className="font-gilroyBold text-base text-black group-hover:text-secondary_color transition-all ease-linear duration-75">
              Logout
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SettingOptions;
