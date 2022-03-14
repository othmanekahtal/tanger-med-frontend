import { Button, Snackbar, Box, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import toast, { Toaster } from "react-hot-toast";

function home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      return navigate("/");
    }
  }, [navigate]);

  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = Object.fromEntries(new FormData(e.target));
    if (!(email && password)) {
      return toast("Registration Successful . pls login ");
    }
    let { data } = await useFetch.post(
      "https://tanger-med-tech.herokuapp.com/api/v1/login",
      {
        email,
        password,
      }
    );
    toast("Registration Successful . pls login ");
    setLoading(false);
    let { _id, token } = data;
    localStorage.setItem("token", token);
    localStorage.setItem("id", _id);
    delete data.token;
    navigate("/");
  };
  return (
    <div className="w-full flex justify-center  ">
      <div className="w-[50%] mt-20">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="email@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!email || !password || loading}
            className="text-white bg-blue-700 w-[200px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? <SyncOutlined spin /> : "Login"}
          </button>
        </form>
        <p className="text-center p-3">
          Not Yet Registred ?<Link to="/signUp">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default home;
