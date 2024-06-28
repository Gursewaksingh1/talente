import * as yup from "yup";

const loginSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required!")
    .matches(/^[A-Za-z\s]+$/, "Only characters are allowed in Name"),
  email: yup
    .string()
    .required("Email is required!")
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Email is invalid!"),
  phone: yup.string().optional(),
});

export default loginSchema;
