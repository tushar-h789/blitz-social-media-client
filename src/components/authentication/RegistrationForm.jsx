import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="w-full rounded-md shadow-md px-5 py-7 box-border">
      <div>
        <form>
          <input
            className="w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            placeholder="First Name"
          />
          <input
            className="w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            placeholder="Last Name"
          />
          <input
            className="w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            placeholder="example@gmail.com"
          />
          <input
            className="w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            placeholder="Password"
          />

          <div className="flex gap-x-7 mb-4">
            <select className="border border-line_color w-[33%] font-gilroyNormal p-2">
              <option>Birthday Year</option>
              <option>1992</option>
              <option>1993</option>
              <option>1994</option>
            </select>
            <select className="border border-line_color w-[33%] font-gilroyNormal p-2">
              <option>Birthday Year</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <select className="border border-line_color w-[33%] font-gilroyNormal p-2">
              <option>Birthday Year</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="mt-5">
            <input id="Male" type="radio" name="Gender" />
            <label htmlFor="Male" className="font-gilroyNormal ml-2">Male</label>
            <input id="Female" type="radio" name="Gender"  className="ml-5"/>
            <label htmlFor="Female" className="font-gilroyNormal ml-2">Female</label>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-secondary_bg rounded-full text-white font-gilroyNormal"
            >
              Submit
            </button>
            <p className="font-gilroyNormal text-base">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-primary_color underline font-gilroySemiBold"
              >
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
