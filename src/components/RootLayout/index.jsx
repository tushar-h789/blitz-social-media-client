import { Outlet } from "react-router-dom";
import LeftPart from "../HomeComponents/LeftPart";
import Header from "../HomeComponents/PostHome/Header";
import RightHome from '../HomeComponents/RightPart'

const RootLayout = () => {
  return (
    <>
      <div className="mx-2 grid grid-cols-1 lg:grid-cols-[70px,1fr] xl:grid-cols-[1fr,3fr,1fr] mt-5 gap-x-3">
        <div className="hidden lg:block">
          <LeftPart />
        </div>
        <div>
          <div>
            <Header />
          </div>
          <Outlet />
        </div>
        <div className="hidden xl:block">
          <RightHome />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
