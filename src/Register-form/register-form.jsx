import React, { useState } from "react";
import { RegisterFormStyle } from "./register-form-style";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "",
    passoutYear: "",
    department: "",
    ugpg: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("The first name is :", formData.firstName);
    console.log("The last name is :", formData.lastName);
    console.log("The college is :", formData.college);
    console.log("The passout year is :", formData.passoutYear);
    console.log("The department is :", formData.department);
    console.log("The UG/PG is :", formData.ugpg);
    console.log("The email is :", formData.email);
    console.log("The mobile number is :", formData.mobile);
    console.log("The password is :", formData.password);
    console.log("The confirm password is :", formData.confirmPassword);
  };

  return (
    <RegisterFormStyle>
      <div className="form-wrapper">
        <h2 className="title">
          Welcome to <span className="highlight">Aptitude Guru Hem LMS</span>
        </h2>

        <form className="form-box" onSubmit={handleSubmit}>
          
          {/* FIRST + LAST NAME */}
          <div className="row">
            <div className="field">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name"
                onChange={handleChange}
              />
            </div>
          </div>

 
          <div className="row">
            <div className="field">
              <label>Select College</label>
              <select name="college" onChange={handleChange}>
                <option value="">-- Select College --</option>
                <option value="Sri Eshwar">Sri Eshwar</option>
                <option value="SRM">SRM</option>
                <option value="IIT">IIT</option>
                <option value="NIT">NIT</option>
                <option value="MIT">MIT</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="field">
              <label>Select Passout Year</label>
              <select name="passoutYear" onChange={handleChange}>
                <option value="">-- Select Year --</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
          </div>


          <div className="row">
            <div className="field">
              <label>Department</label>
              <select name="department" onChange={handleChange}>
                <option value="">-- Select Department --</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
              </select>
            </div>

            <div className="field">
              <label>UG/PG</label>
              <select name="ugpg" onChange={handleChange}>
                <option value="">-- Select --</option>
                <option value="UG">UG</option>
                <option value="PG">PG</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Mobile</label>
              <input
                name="mobile"
                type="tel"
                placeholder="Enter mobile number"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                onChange={handleChange}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="field">
              <label>Confirm Password</label>
              <input
                name="confirmPassword"
                type={showCPassword ? "text" : "password"}
                placeholder="Confirm password"
                onChange={handleChange}
              />
              <button type="button" onClick={() => setShowCPassword(!showCPassword)}>
                {showCPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
