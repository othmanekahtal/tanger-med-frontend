import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import toast, { Toaster } from "react-hot-toast";
import { SyncOutlined } from "@ant-design/icons";
import Input from "@/components/input";

function home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("othmanekahtal@gmail.com");
  const [password, setPassword] = useState("mi");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      return navigate("/");
    }
  }, [navigate]);

  const sendData = async (e) => {
    e.preventDefault();
    if (!(email && password)) {
      let errorMessage = "";
      errorMessage = !email ? "Enter email before!" : "Enter password before!";
      console.log(errorMessage);
      return toast.error(errorMessage);
    }
    setLoading(true);
    let response = await useFetch.post(
      "https://tanger-med-tech.herokuapp.com/api/v1/login",
      {
        email,
        password,
      }
    );
    const data = await response.json();
    const { status } = response;
    setLoading(false);
    if (status == 401) {
      return toast.error("Email or Password not correct!");
    }
    localStorage.setItem("token", token);
    localStorage.setItem("id", _id);
    delete data.token;
    navigate("/");
  };
  const emailInput = {
    type: email,
    labelValue: "Your email",
    value: email,
    onChangeAction: (e) => setEmail(e.target.value),
    placeholder: "example@example.com",
  };
  const passwordInput = {
    type: password,
    labelValue: "Your password",
    value: password,
    onChangeAction: (e) => setPassword(e.target.value),
    placeholder: "password",
  };
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <Toaster />
      <div className="mt-20">
        <h2 className="text-2xl dark:text-gray-300 text-center mb-5">Login</h2>
        <form onSubmit={sendData}>
          <Input {...emailInput} />
          <Input {...passwordInput} />
          <button
            type="submit"
            // disabled={!email || !password || loading}
            className={`text-white dark:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              ${
                !email || !password || loading
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
          >
            {loading ? <SyncOutlined spin /> : "Login"}
          </button>
        </form>
        <p className="text-center p-3 dark:text-gray-300">
          You haven't an account ?{" "}
          <Link
            className="dark:text-blue-500 dark:hover:text-blue-600"
            to="/signup"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default home;
