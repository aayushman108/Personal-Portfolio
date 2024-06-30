import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name is too short - should be 2 chars minimum."),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string()
    .required("Subject is required")
    .min(2, "Subject is too short - should be 2 chars minimum."),
  message: Yup.string()
    .required("message is required")
    .min(5, "Message is too short - should be 5 chars minimum."),
});
