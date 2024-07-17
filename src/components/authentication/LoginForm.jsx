import { useFormik } from "formik";
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { logIn } from "../../validation";

const initialState = {
    email: "",
    password: "",
  };


const LoginForm = () => {

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: logIn,
        onSubmit: () => {
          console.log("Loign successfully");
        },
      });

      const { errors, touched } = formik;
      

  return (
    <>
    <Helmet>
      <title>Registration</title>
    </Helmet>
    <div className="w-full rounded-md shadow-md px-5 py-7 box-border">
      <div>
        <form onSubmit={formik.handleSubmit}>
         
          <input
            type="email"
            className={
              errors.email && touched.email
                ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                : "w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            }
            placeholder="example@gmail.com"
            onChange={formik.handleChange}
            autoComplete="off"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            name="email"
          />
          {errors.email && touched.email && (
            <p className="font-gilroyNormal text-red text-sm my-2">
              {errors.email}
            </p>
          )}
          <input
            type="password"
            className={
              errors.password && touched.password
                ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                : "w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
            }
            placeholder="Password"
            onChange={formik.handleChange}
            autoComplete="off"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            name="password"
          />
          {errors.password && touched.password && (
            <p className="font-gilroyNormal text-red text-sm my-2">
              {errors.password}
            </p>
          )}


          <div className="sm:flex justify-between items-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-secondary_bg rounded-full text-white font-gilroyNormal"
            >
              Log in
            </button>
            <p className="font-gilroyNormal text-base my-2 sm:my-0">
              Already have an account?{" "}
              <Link
                to="/registration"
                className="text-primary_color underline font-gilroySemiBold"
              >
                {" "}
                Registration
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default LoginForm