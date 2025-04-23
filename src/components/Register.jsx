import { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (name) => {
    return function (event) {
      const { value } = event.target;

      setFormData((prevData) => {
        return {
          ...prevData,
          [name]: value,
        };
      });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section className="register-container">
      <h1>Register to continue</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
        }}
      >
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange("name")}
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange("email")}
          />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={handleChange("password")}
          />
        </div>
        <div className="input-box">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange("cinfirmPassword")}
          />
        </div>
        <div>
          <input
            type="submit"
            name="submitButton"
            id="submitButton"
            value={"Register"}
          />
        </div>
      </form>
    </section>
  );
};
