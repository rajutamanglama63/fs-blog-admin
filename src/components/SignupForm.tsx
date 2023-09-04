import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [userInput, setUserInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const clear = () => {
    setUserInput({
      fullname: "",
      email: "",
      password: "",
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("userInput: ", userInput);
    clear();
  };
  return (
    <div className="w-3/6 mx-auto mt-4">
      <form className="flex flex-col" onSubmit={submitHandler}>
        <h1 className="text-center font-bold text-2xl mb-3 ">Sign up</h1>
        <input
          placeholder="fullname"
          className="border rounded p-2 mb-2 focus:ring-1 outline-none focus:ring-blue-500 w-full"
          name="fullname"
          value={userInput.password}
          onChange={handleInput}
        />

        <input
          placeholder="example@example.com"
          className="border rounded p-2 mb-2 focus:ring-1 outline-none focus:ring-blue-500 w-full"
          name="email"
          value={userInput.email}
          type="text"
          onChange={handleInput}
        />
        <input
          placeholder="password"
          className="border rounded p-2 mb-2 focus:ring-1 outline-none focus:ring-blue-500 w-full"
          name="password"
          value={userInput.password}
          onChange={handleInput}
        />

        <button
          type="submit"
          className="p-2 bg-blue-500 rounded hover:opacity-50"
        >
          submit
        </button>
        <span className="mt-2 mb-2 text-gray-400">
          Already have an account.
          <Link
            to="/signin"
            className="ml-2 hover:border-b-2 hover:border-blue-500"
          >
            Signin
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignupForm;
