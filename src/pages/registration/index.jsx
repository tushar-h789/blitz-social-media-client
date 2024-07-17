import LeftAuth from "../../components/authentication/LeftAuth";
import RegistrationForm from "../../components/authentication/RegistrationForm";
import { RegistrationIcon } from "../../svg/RegistrationIcon";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  return (
    <>
      <ToastContainer />
      <div className="relative">
        <div className="w-[350px] h-[350px] bg-purple-100 -z-10 rounded-full -ml-40 -mt-36 2xl:-mt-40 absolute top-0 hidden lg:block"></div>
        <div className="container flex gap-5 justify-center items-center h-screen z-10">
          <div className="w-[45%] hidden lg:block">
            <LeftAuth
              icon={<RegistrationIcon />}
              title="Start Your Journey"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat.
        Illo molestiae qui modi? Atque sit explicabo vitae officia, natus
        dolorum voluptatum veniam iure nam nobis eveniet perspiciatis
        repellendus, culpa, autem eos. Illo culpa obcaecati eius quibusdam ea
        minus pariatur aperiam, nemo exercitationem dolores sit maiores, qui
        praesentium corrupti veniam."
            />
          </div>
          <div className="w-full lg:w-[45%]">
            <RegistrationForm toast={toast}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
