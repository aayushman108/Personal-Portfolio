import { ChangeEvent, FormEvent, useState } from "react";
import { validationSchema } from "../../utils/validateSchema";
import { useAppSelector } from "../../store/hook.store";
import { toast } from "react-toastify";

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
  const { theme } = useAppSelector((state) => state.theme);

  //Initial form values
  const initialValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState<IInititalValue>(initialValue);
  const [errors, setErrors] = useState<IError | null>(null);

  /**
   * MARK: Handles changes in the input fields.
   * @param e - The change event.
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setErrors((prev) => {
      return { ...prev, [name]: "" };
    });
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  /**
   * MARK: Handles form submission.
   * @param e - The form submit event.
   */
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      toast.success("Form submitted successfully!");
      setFormData(initialValue);
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
    <section
      className={`contact-container ${theme === "dark" ? "dark" : ""}`}
      id={props.id}
      aria-label="Contact Form"
    >
      <div className="contact">
        {/* Contact Heading */}
        <h2 className={`contact_heading ${theme === "dark" ? "dark" : ""}`}>
          CONTACT ME
        </h2>
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="contact_form"
          aria-label="Contact Form"
        >
          {/* Name Input */}
          <div className="form-field">
            <label htmlFor="name" className="visually-hidden-label">
              Full name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              name="name"
              placeholder="Full name *"
              className={`form-field_input ${errors?.name ? "error" : ""} ${
                theme === "dark" ? "dark" : ""
              }`}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors?.name ? "true" : "false"}
              aria-describedby={errors?.name ? "name-error" : undefined}
            />
            {errors?.name && (
              <div className="form-field_error" id="name-error" role="alert">
                {errors.name}
              </div>
            )}
          </div>
          {/* Email Input */}
          <div className="form-field">
            <label htmlFor="email" className="visually-hidden-label">
              Email address
            </label>
            <input
              type="text"
              id="email"
              value={formData.email}
              name="email"
              placeholder="Email address *"
              className={`form-field_input ${errors?.email ? "error" : ""} ${
                theme === "dark" ? "dark" : ""
              }`}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors?.email ? "true" : "false"}
              aria-describedby={errors?.email ? "email-error" : undefined}
            />
            {errors?.email && (
              <div className="form-field_error" id="email-error" role="alert">
                {errors.email}
              </div>
            )}
          </div>
          {/* Subject Input */}
          <div className="form-field">
            <label htmlFor="subject" className="visually-hidden-label">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              name="subject"
              placeholder="Subject *"
              className={`form-field_input ${errors?.subject ? "error" : ""} ${
                theme === "dark" ? "dark" : ""
              }`}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors?.subject ? "true" : "false"}
              aria-describedby={errors?.subject ? "subject-error" : undefined}
            />
            {errors?.subject && (
              <div className="form-field_error" id="subject-error" role="alert">
                {errors.subject}
              </div>
            )}
          </div>
          {/* Message Textarea */}
          <div className="form-field">
            <label htmlFor="message" className="visually-hidden-label">
              Message
            </label>
            <textarea
              rows={5}
              id="message"
              value={formData.message}
              name="message"
              placeholder="Enter message *"
              className={`form-field_input ${
                errors?.message ? "error" : ""
              } textarea ${theme === "dark" ? "dark" : ""}`}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors?.message ? "true" : "false"}
              aria-describedby={errors?.message ? "message-error" : undefined}
            />
            {errors?.message && (
              <div className="form-field_error" id="message-error" role="alert">
                {errors.message}
              </div>
            )}
          </div>
          {/* Submit button */}
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
