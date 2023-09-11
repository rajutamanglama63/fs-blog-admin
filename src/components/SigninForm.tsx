import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userSignin } from "../reducers/authReducer";
import { useDispatch } from "react-redux";

const SigninForm = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const clear = () => {
    setCredentials({
      email: "",
      password: "",
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userSignin(credentials));
    clear();
    navigate("/");
  };
  return (
    <div className="w-3/6 mx-auto mt-4">
      <form className="flex flex-col" onSubmit={submitHandler}>
        <h1 className="text-center font-bold text-2xl mb-3 ">Sign in</h1>

        <input
          placeholder="example@example.com"
          className="border rounded p-2 mb-2 focus:ring-1 outline-none focus:ring-blue-500 w-full"
          name="email"
          value={credentials.email}
          type="text"
          onChange={handleInput}
        />
        <input
          placeholder="password"
          className="border rounded p-2 mb-2 focus:ring-1 outline-none focus:ring-blue-500 w-full"
          name="password"
          value={credentials.password}
          onChange={handleInput}
        />

        <button
          type="submit"
          className="p-2 bg-blue-500 rounded hover:opacity-50"
        >
          submit
        </button>
        <span className="mt-2 mb-2 text-gray-400">
          Not registered yet?
          <Link
            to="/signup"
            className="ml-2 hover:border-b-2 hover:border-blue-500"
          >
            Signup
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SigninForm;
