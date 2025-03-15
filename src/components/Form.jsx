import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../styles/FormStyle.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    if (data.email.endsWith("@ez.works")) {
      setMessage("Email ending with @ez.works not allowed!");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("https://test.ezworks.ai/api", data);
      if (response.status === 200) {
        setMessage("Form Submitted");
        reset();
      }
    } catch (error) {
      setMessage("Submission failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
          placeholder="Email Address"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting...." : "Contact Me"}
        </button>
        {errors.email && <p className="error">{errors.email.message}</p>}
        <p className="error">{message}</p>
      </form>
    </div>
  );
};

export default Form;
