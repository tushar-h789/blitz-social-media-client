import LeftAuth from "../../components/authentication/LeftAuth";
import RegistrationForm from "../../components/authentication/RegistrationForm";
import { RegistrationIcon } from "../../svg/RegistrationIcon";

const Registration = () => {
  return (
    <div className="relative">
      <div className="w-[350px] h-[350px] bg-purple-100 rounded-full -ml-40 -mt-40 absolute top-0"></div>
      <div className="container flex gap-5 justify-center items-center h-screen">
        <div className="w-[45%]">
          <LeftAuth icon={<RegistrationIcon/>}
           title="Start Your Journey" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat.
        Illo molestiae qui modi? Atque sit explicabo vitae officia, natus
        dolorum voluptatum veniam iure nam nobis eveniet perspiciatis
        repellendus, culpa, autem eos. Illo culpa obcaecati eius quibusdam ea
        minus pariatur aperiam, nemo exercitationem dolores sit maiores, qui
        praesentium corrupti veniam."/>
        </div>
        <div className="w-[45%]"> 
          <RegistrationForm/>
        </div>
      </div>
    </div>
  );
};

export default Registration;
