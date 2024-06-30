import { ChangeEvent, FormEvent, useState } from "react";
import { validationSchema } from "../../utils/validateSchema";

interface IProps {
  id: string;
}
interface IInititalValue {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface IError {
  [key: string]: string;
}
export function Contact(props: IProps) {
  const initialValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState<IInititalValue>(initialValue);
  const [errors, setErrors] = useState<IError | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setErrors((prev) => {
      return { ...prev, [name]: "" };
    });
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form submitted successfully");
    } catch (errors) {
      if (errors instanceof Error) {
        const yupErrors = errors as any;
        const newErrors: IError = {};
        yupErrors.inner.forEach((error: any) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="contact-container" id={props.id}>
      <div className="contact">
        <h2 className="contact_heading">CONTACT ME</h2>
        <form onSubmit={handleSubmit} className="contact_form">
          <div className="form-field">
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="Full name *"
              className={`form-field_input ${errors?.name ? "error" : ""}`}
              onChange={handleChange}
            />
            {errors?.name && (
              <div className="form-field_error">{errors.name}</div>
            )}
          </div>
          <div className="form-field">
            <input
              type="text"
              value={formData.email}
              name="email"
              placeholder="Email address *"
              className={`form-field_input ${errors?.email ? "error" : ""}`}
              onChange={handleChange}
            />
            {errors?.email && (
              <div className="form-field_error">{errors.email}</div>
            )}
          </div>
          <div className="form-field">
            <input
              type="text"
              value={formData.subject}
              name="subject"
              placeholder="Subject *"
              className={`form-field_input ${errors?.subject ? "error" : ""}`}
              onChange={handleChange}
            />
            {errors?.subject && (
              <div className="form-field_error">{errors.subject}</div>
            )}
          </div>
          <div className="form-field">
            <input
              type="text"
              value={formData.message}
              name="message"
              placeholder="Enter message *"
              className={`form-field_input ${errors?.message ? "error" : ""}`}
              onChange={handleChange}
            />
            {errors?.message && (
              <div className="form-field_error">{errors.message}</div>
            )}
          </div>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
