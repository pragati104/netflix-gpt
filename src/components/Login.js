import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    // validate the form

    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="bg-look"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" absolute w-[550px] h-[700px] bg-black  rounded-md my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-10 mx-20">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="py-4 px-6 mx-20 my-4 w-96 border rounded-md bg-gray-900"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Phone number"
            className="py-4 px-6 mx-20 my-4 w-96 border rounded-md bg-gray-900"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="py-4 px-6 mx-20 my-4 w-96  border rounded-md bg-gray-900"
          />
          <p className="text-red-500 mx-20 font-bold text-lg">{errorMessage}</p>
          <button
            className="p-3 mx-20 my-4 rounded-md bg-red-600 w-96"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="px-20 py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "  New to Netflix ? Sign up now"
              : " Already registered !Sign In now..."}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
