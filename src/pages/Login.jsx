import React, { useState } from "react";
import toast from "react-hot-toast";
const Login = () => {
  const [state, setstate] = useState("Login");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    if (!formData.email || !formData.password) {
      // alert("Please fill in all fields.");
      toast.error("Please fill in all the fields");
      return;
    }

    setLoading(true);
    let responseData;

    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    setLoading(false);

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      // alert(responseData.errors);
      toast.error(responseData.errors)
    }
  };

  const signup = async () => {
    if (!formData.email || !formData.password || !formData.username) {
      // alert("Please fill in all fields.");
      toast.error("Please fill in all the fields");
      return;
    }

    setLoading(true);
    let responseData;

    const dataToSend = {
      name: formData.username,
      email: formData.email,
      password: formData.password,
    };

    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    setLoading(false);

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      // alert(responseData.errors);
      toast.error(responseData.errors)
    }
  };
  return (
    <section className="max-padd-container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" && (
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your Name"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl   "
            />
          )}
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl   "
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl   "
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          disabled={loading}
          className="text-white bg-gray-900 my-5 w-full !rounded-md py-3"
        >
          {loading ? "Please Wait..." : "Continue"}
        </button>

        {state === "Sign Up" ? (
          <p className="text-black font-bold ">
            Already have an Account ?{" "}
            <span
              onClick={() => setstate("Login")}
              className="text-green-400 underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-black font-bold ">
            Create an Account ?{" "}
            <span
              onClick={() => setstate("Sign Up")}
              className="text-green-400 underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}

        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By Clicking, i agree to the terms of use & policy</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
