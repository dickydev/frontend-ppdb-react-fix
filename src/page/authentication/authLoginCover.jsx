/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import loginIllustration from "../../assets/login-illustration.svg";
import { post } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // Icon for close button
import Notification from "../../components/Notification/Notif";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); // Error message state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post("/auth/login", { username, password });
      if (response?.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.username);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("role", response.data.role);
        if (response.data.role === "admin") {
          navigate('/dashboard'); 
        } else {
          navigate('/home');
        }
      }
    } catch (err) {
      setErrorMsg("Terjadi kesalahan saat login, Silakan coba lagi!");
    }
  };

  const handleCloseError = () => {
    setErrorMsg(""); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Login Form Section */}
      <div className="flex flex-col md:flex-row flex-1 justify-center mx-4 md:mx-0">
        {/* Left Image Section */}
        <div className="hidden md:flex md:w-2/3 bg-red-900 items-center justify-center">
          <img
            className="max-w-lg"
            src={loginIllustration}
            alt="Login Illustration"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 bg-white p-8 md:p-16 justify-center rounded-xl shadow-lg md:rounded-none md:shadow-none">
          <div className="mb-8 text-left">
            <h2 className="text-2xl font-bold text-red-900">
              Sistem Manajemen Wawancara PPDB Letris Indonesia 2
            </h2>
            <p className="mt-2 text-gray-600">
              Silakan masukan username dan password anda
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <Notification type="error" message={errorMsg} onClose={handleCloseError}/>
          )}

            <div>
              <label
                htmlFor="login-username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="login-username"
                type="text"
                name="username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="jhondeo123"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                name="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="············"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-800 hover:bg-red-700 rounded-lg shadow focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
