import { BackIcon } from "../../../../assets/svg/backIcon";
import { Moon } from "../../../../assets/svg/Moon";

const DisplayMode = ({ setVisible }) => {
  return (
    <div className="bg-white rounded-md shadow-md w-[300px] p-4 absolute top-16 left-0">
      <div
        className="flex items-center gap-x-3 mb-4 hover:text-secondary_color transition-all ease-linear duration-75 cursor-pointer"
        onClick={() => setVisible(false)}
      >
        <div>
          <BackIcon />
        </div>
        <div>
          <h4 className="font-gilroyBold text-md text-black">
            Display & Accessability
          </h4>
        </div>
      </div>

      <div className="flex justify-between gap-x-4">
        <div className="w-8 h-8 bg-white-100 rounded-full flex items-center justify-center">
          <Moon />
        </div>
        <div className="w-4/5">
          <h4 className="font-gilroyBold text-md text-black">Dark Mode</h4>
          <p className="font-gilroyNormal text-sm text-secondary_color">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between my-3">
          <label
            htmlFor="white"
            className="font-gilroyBold text-md text-black cursor-pointer"
          >
            Off
          </label>
          <input type="radio" name="DarkMode" id="white" />
        </div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="dark"
            className="font-gilroyBold text-md text-black cursor-pointer"
          >
            On
          </label>
          <input type="radio" name="DarkMode" id="dark" />
        </div>
      </div>
    </div>
  );
};

export default DisplayMode;
