import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { signUp } from "../../validation";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import DateOfBarth from "./DateOfBarth";
import Gender from "./Gender";
import { useAddUserMutation } from "../../features/api/authApi";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDay: new Date().getDate(),
  gender: "",
};

const RegistrationForm = ({toast}) => {
  const [ageError, setAgeError] = useState("");
  const [addUser, { isLoading }] = useAddUserMutation();

  const registration = async () => {
    const signUpMutation = await addUser({
      fName: formik.values.fName,
      lName: formik.values.lName,
      email: formik.values.email,
      password: formik.values.password,
      bYear: formik.values.bYear,
      bMonth: formik.values.bMonth,
      bDay: formik.values.bDay,
      gender: formik.values.gender,
    });

    if(signUpMutation?.data){
      toast.success(signUpMutation?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else if(signUpMutation?.error){
      toast.error(signUpMutation?.error?.data?.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: () => {
      const currentDate = new Date();
      const picked_Date = new Date(
        formik.values.bYear,
        formik.values.bMonth,
        formik.values.bDay
      );

      const adult = new Date(1970 + 18, 0, 1);
      const tooOld = new Date(1970 + 70, 0, 1);
      if (currentDate - picked_Date < adult) {
        return setAgeError("Underage you are not 18");
      } else if (currentDate - picked_Date > tooOld) {
        return setAgeError("You are more then 70");
      }
      console.log("submitted");
      registration();
    },
  });
  //   console.log(formik);

  const { errors, touched } = formik;
  //   console.log(errors);

  const tempYears = new Date().getFullYear();
  const years = Array.from(new Array(105), (val, index) => tempYears - index);
  const month = Array.from(new Array(12), (val, index) => 1 + index);

  const day = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  };
  const getDates = Array.from(new Array(day()), (val, index) => 1 + index);

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="w-full rounded-md shadow-md px-5 py-7 box-border">
        <div>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              className={
                errors.fName && touched.fName
                  ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                  : "w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
              }
              placeholder="First Name"
              onChange={formik.handleChange}
              autoComplete="off"
              value={formik.values.fName}
              onBlur={formik.handleBlur}
              name="fName"
            />
            {errors.fName && touched.fName && (
              <p className="font-gilroyNormal text-red text-sm my-2">
                {errors.fName}
              </p>
            )}
            <input
              type="text"
              className={
                errors.fName && touched.lName
                  ? "w-full px-4 py-2 border border-line_color rounded-md focus:outline-none"
                  : "w-full px-4 py-2 border border-line_color rounded-md mb-5 focus:outline-none"
              }
              placeholder="Last Name"
              onChange={formik.handleChange}
              autoComplete="off"
              value={formik.values.lName}
              onBlur={formik.handleBlur}
              name="lName"
            />
            {errors.lName && touched.lName && (
              <p className="font-gilroyNormal text-red text-sm my-2">
                {errors.lName}
              </p>
            )}
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

            <DateOfBarth
              formik={formik}
              years={years}
              month={month}
              getDates={getDates}
              ageError={ageError}
            />

            <Gender formik={formik} errors={errors} touched={touched} />

            <div className="sm:flex justify-between items-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-secondary_bg rounded-full text-white font-gilroyNormal"
              >
                Submit
              </button>
              <p className="font-gilroyNormal text-base my-2 sm:my-0">
                Already have an account?{" "}
                <Link
                  to="/login"
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
    </>
  );
};

export default RegistrationForm;
