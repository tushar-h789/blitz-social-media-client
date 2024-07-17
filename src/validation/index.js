import * as Yup from 'yup'

export const signUp = Yup.object({
    fName: Yup.string().min(3).max(15).required("Please Enter Your First Name"),
    lName: Yup.string().min(3).max(15).required("Please Enter Your Last Name"),
    email: Yup.string().required("Please Enter Valid Email"),
    password: Yup.string().min(6).required("Please Enter Password"),
    gender: Yup.string().required("Please Select Gender"),
})

export const logIn = Yup.object({
    email: Yup.string().required("Please Enter Valid Email"),
    password: Yup.string().min(6).required("Please Enter Password"),
})