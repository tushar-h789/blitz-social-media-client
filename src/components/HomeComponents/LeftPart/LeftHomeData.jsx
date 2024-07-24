import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SettingOptions from "./SettingOption";
import OutSideClick from "../../../functions/click";

const LeftHomeData = ({ data }) => {
  const ItemIcon = data.icon;
  const [show, setShow] = useState(false);
  const clickOutSide = useRef(null)

  OutSideClick(clickOutSide, ()=>{
    setShow(false)
  })

  const SettingsSeparation = data.title === "Settings" && (
    <div className="relative">
      <div
        to={data.to}
        className={`flex gap-x-4 items-center mb-4 py-3 px-6 hover:bg-black rounded-full group transition-all ease-linear duration-100 cursor-pointer ${show && 'bg-black'}`}
        onClick={() => setShow(true)}
      >
        <div className={`group-hover:text-white ${show && 'text-white'}`}>
          <ItemIcon />
        </div>
        <div className={`group-hover:text-white font-gilroyMedium text-lg text-black transition-all ease-linear duration-100 ${show && 'text-white'}`}>
          <p>{data.title}</p>
        </div>
      </div>
      <div className="" ref={clickOutSide}>
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
          className="flex gap-x-4 items-center mb-4 py-3 px-6 hover:bg-black rounded-full group transition-all ease-linear duration-100 "
        >
          <div className="group-hover:text-white">
            <ItemIcon />
          </div>
          <div className="group-hover:text-white font-gilroyMedium text-lg text-black transition-all ease-linear duration-100 ">
            <p>{data.title}</p>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftHomeData;
