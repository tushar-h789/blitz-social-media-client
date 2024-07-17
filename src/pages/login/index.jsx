import { toast, ToastContainer } from "react-toastify"
import LeftAuth from "../../components/authentication/LeftAuth"
import LoginForm from "../../components/authentication/LoginForm"
import { LoginIcon, } from "../../svg/LoginIcon"


const Login = () => {



  return (
    <>
    <ToastContainer />
    <div className="relative">
      <div className="w-[350px] h-[350px] bg-purple-100 -z-10 rounded-full -ml-40 -mt-36 2xl:-mt-40 absolute top-0 hidden lg:block"></div>
      <div className="container flex gap-5 justify-center items-center h-screen z-10">
        <div className="w-[45%] hidden lg:block">
          <LeftAuth
            icon={<LoginIcon />}
            title="Login for access"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat.
      Illo molestiae qui modi? Atque sit explicabo vitae officia, natus
      dolorum voluptatum veniam iure nam nobis eveniet perspiciatis."
          />
        </div>
        <div className="w-full lg:w-[45%]">
          <LoginForm toast={toast}/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login