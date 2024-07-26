import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SettingOptions from "./SettingOption";
import OutSideClick from "../../../functions/click";

const LeftHomeData = ({ data }) => {
  const ItemIcon = data.icon;
  const [show, setShow] = useState(false);
  const clickOutSide = useRef(null);

  OutSideClick(clickOutSide, () => {
    setShow(false);
  });

  const SettingsSeparation = data.title === "Settings" && (
    <div className="relative">
      <NavLink
        to={data.to}
        className={`flex w-10 h-10 2xl:w-auto  justify-center 2xl:justify-normal items-center 2xl:gap-x-4 2xl:mb-4 2xl:py-3 2xl:px-6 hover:bg-black rounded-full group transition-all ease-linear duration-100 cursor-pointer ${
          show && "bg-black"
        }`}
        onClick={() => setShow(true)}
      >
        <div className={`group-hover:text-white xl:my-10 ${show && "text-white"}`}>
          <ItemIcon />
        </div>
        <div
          className={`group-hover:text-white font-gilroyMedium text-lg text-black transition-all ease-linear duration-100 hidden 2xl:block ${
            show && "text-white"
          }`}
        >
          <p>{data.title}</p>
        </div>
      </NavLink>
      <div
        className="2xl:top-0 xl:-top-6 xl:ml-16 top-12 absolute -left-2/4 -translate-x-2/4 2xl:left-0 2xl:translate-x-0"
        ref={clickOutSide}
      >
        {show && <SettingOptions />}
      </div>
    </div>
  );

  return (
    <>
      {SettingsSeparation ? (
        SettingsSeparation
      ) : (
        <NavLink
          to={data.to}
          className="flex w-10 h-10 2xl:w-auto 2xl:h-auto justify-center 2xl:justify-normal 2xl:gap-x-4 items-center lg:mb-4 xl:mb-4 2xl:mb-4 2xl:py-3 2xl:px-6 hover:bg-black rounded-full group transition-all ease-linear duration-100 "
        >
          <div className="group-hover:text-white">
            <ItemIcon />
          </div>
          <div className="group-hover:text-white font-gilroyMedium text-lg text-black transition-all ease-linear duration-100 hidden 2xl:block">
            <p>{data.title}</p>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftHomeData;
