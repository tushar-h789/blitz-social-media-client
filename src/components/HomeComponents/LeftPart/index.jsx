import { LeftData } from "./Data";
import LeftHomeData from "./LeftHomeData";
import LeftProfile from "./LeftProfile";

const LeftPart = () => {
  return (
   <>
    <div>
        <LeftProfile/>
    </div>
    <div className="mt-8 w-3/4 mx-auto">
        {
            LeftData.map((data, index)=>(
                <LeftHomeData key={index} data={data}/>

            ))
        }
    </div>
   </>
  );
};

export default LeftPart;
