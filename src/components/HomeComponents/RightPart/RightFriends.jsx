import { Link } from "react-router-dom";
import { ReduceText } from "../../../functions/ReduceText";

const RightFriends = () => {
    const originalName = "Tushar Imran"
    const reduceText = ReduceText(originalName, 15)
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="font-gilroyBold text-lg text-black">Friend Request</h4>
        </div>
        <div>
          <Link
            to="/friends"
            className="font-gilroyMedium text-base border border-black px-3 py-1 rounded-full  text-black hover:bg-black hover:text-white transition-all ease-linear duration-100"
          >
            See All
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 bg-secondary_color rounded-full"></div>
            <div className="w-2/3">
                <h5 className="font-gilroyBold text-black text-sm leading-none">{reduceText}</h5>
                <span className="font-gilroyLight text-xs text-secondary_color">2 hour age</span>
            </div>
        </div>
        <div className="flex items-center gap-x-1 w-1/2">
            <button className="font-gilroyNormal text-base bg-black text-white px-2 py-1 rounded-full border border-black hover:bg-white hover:text-black transition ease-linear duration-100">Accept</button>
            <button className="font-gilroyNormal text-base bg-red text-white px-2 py-1 rounded-full border border-red hover:bg-white hover:text-black transition ease-linear duration-100">Reject</button>
        </div>
      </div>
 
      {/* demo line */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 bg-secondary_color rounded-full"></div>
            <div className="w-2/3">
                <h5 className="font-gilroyBold text-black text-sm leading-none">{reduceText}</h5>
                <span className="font-gilroyLight text-xs text-secondary_color">2 hours age</span>
            </div>
        </div>
        <div className="flex items-center gap-x-1 w-1/2">
            <button className="font-gilroyNormal text-base bg-black text-white px-2 py-1 rounded-full border border-black hover:bg-white hover:text-black transition ease-linear duration-100">Accept</button>
            <button className="font-gilroyNormal text-base bg-red text-white px-2 py-1 rounded-full border border-red hover:bg-white hover:text-black transition ease-linear duration-100">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default RightFriends;
