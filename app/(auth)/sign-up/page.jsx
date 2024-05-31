"use client"
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    username: generateRandomUsername(),
    email: "",
    password: "",
    mobileNumber: "",
    firstName: "",
    lastName: "",
    profilePicture: null, // Initialize profilePicture as null
  });

  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const file = type === "file" ? files[0] : null;
    setFormData({ ...formData, [name]: file || value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsRegistering(true);
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      //now look here you have to just change this senetece

    //   const response = await fetch("https://digiiearn-api.kasimsaifi.tech/api/users/register", {
    //     method: "POST",
    //     body: formDataToSend,
    //   });
    

      if (response.ok) {
        console.log("Registration successful");
        setRegistrationSuccess(true);
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsRegistering(false);
    }
  };

  function generateRandomUsername() {
    const randomWord = Math.random().toString(36).substring(7);
    return `user_${randomWord}`;
  }

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="p-8 shadow-lg rounded-lg w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
          {registrationSuccess ? (
            <div className="mb-4 text-green-600 text-center">
              Registration successful. Redirecting to login...
            </div>
          ) : null}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 hidden">
              <label className="block font-semibold mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Mobile Number</label>
              <input
                type="number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Profile Picture</label>
              <input
                type="file"
                name="profilePicture"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {isRegistering ? (
              <button type="submit" className="btn w-full mb-4" disabled>
                Registering...
              </button>
            ) : (
              <button type="submit" className="btn w-full mb-4">
                Register
              </button>
            )}
          </form>
          <p className="text-center text-xs">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
