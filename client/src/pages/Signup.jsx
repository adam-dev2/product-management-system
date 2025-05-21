import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const errs = {};
    if (!email) errs.email = "Email is required";
    if (!password) errs.password = "Password is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(""); 
    const errs = validate();

    if (Object.keys(errs).length === 0) {
      try {
        const response = await fetch("https://product-management-system-jb0f.onrender.com/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          setErrors({ apiError: data.message || "Signup failed" });
          setSuccess("");
        } else {
          setErrors({});
          setSuccess("Signup successful! You can now login.");
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        setErrors({ apiError: "Network error. Please try again." });
        setSuccess("");
      }
    } else {
      setErrors(errs);
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-teal-400 text-center">
          Signup
        </h2>

        <label className="block mb-2 text-teal-300 font-semibold" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`w-full px-4 py-2 rounded-md bg-gray-800 border ${
            errors.email ? "border-red-500" : "border-gray-700"
          } text-white focus:outline-none focus:ring-2 focus:ring-teal-400`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

        <label
          className="block mt-6 mb-2 text-teal-300 font-semibold"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`w-full px-4 py-2 rounded-md bg-gray-800 border ${
            errors.password ? "border-red-500" : "border-gray-700"
          } text-white focus:outline-none focus:ring-2 focus:ring-teal-400`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full mt-8 py-3 bg-teal-500 rounded-md font-semibold hover:bg-teal-600 transition"
        >
          Signup
        </button>
        <p className="text-center mt-4 text-gray-200">Already have an account?<a href="/login" className="hover:text-gray-500 underline pl-2">Login</a></p>
        {errors.apiError && (
          <p className="text-red-500 text-center mt-4">{errors.apiError}</p>
        )}

        {success && (
          <p className="text-green-500 text-center mt-4">{success}</p>
        )}
      </form>
    </div>
  );
}
