import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is Required"),
    email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
    number: yup
    .string()
    .required("Number is Required"),
    password:yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
})

export default formSchema
