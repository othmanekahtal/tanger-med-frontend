import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import toast, { Toaster } from "react-hot-toast";
const dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [system_info, setSystem_info] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  async function get_system() {
    setLoading(true);
    let response = await useFetch.get(
      // "https://tanger-med-tech.herokuapp.com/api/v1/login",
      "http://localhost:8080/api/v1/system",
      localStorage.getItem("token")
    );
    const data = await response.json();
    const { status } = response;
    setSystem_info(data.data);
    if (status == 401) {
      setLoading(false);
      toast.error("You need authorization to access this page!");
      navigate("/");
    }
    const get_user = await useFetch.get(
      // "https://tanger-med-tech.herokuapp.com/api/v1/check",
      "http://localhost:8080/api/v1/check-user",
      localStorage.getItem("token")
    );
    const user = await get_user.json();
    const { status: userStatus } = get_user;
    if (userStatus == 401) {
      toast.error("You need authorization to access this page!");
      navigate("/");
    }
    setUser(user);
    setLoading(false);
  }
  useEffect(async () => {
    await get_system();
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/");
    }
  }, [navigate]);
  if (loading || !system_info)
    return (
      <>
        <div className="w-full flex justify-center items-center h-screen dark:text-white">
          loading...
        </div>
      </>
    );
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen dark:text-white">
        <Toaster />
        <div className="py-12">
          <h2 className="text-2xl text-center pb-10">
            Welcome again in {system_info.name}
          </h2>
          <p className="text-md mb-2">
            description :
            <div className="px-2 text-base">{system_info.description}</div>
          </p>
          <p text-md mb-2>
            Max deadline:
            <div className="px-2 text-base">
              {system_info.storageDeadLine} days
            </div>
          </p>
          <p text-md mb-2>
            free of late per day:
            <div className="px-2 text-base">
              {system_info.lateShippingFee} dirham
            </div>
          </p>
          <p text-md mb-2>
            total capacity of quais:
            <div className="px-2 text-base">{system_info.capacityPerQuais}</div>
          </p>
          <p text-md mb-2>
            free of quais per day:
            <div className="px-2 text-base">
              {system_info.quaisFeePerDay} dirham
            </div>
          </p>
          {user.role == "superAdmin" ? (
            <button className="mt-6 text-white dark:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <Link to="/update-system">update information</Link>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default dashboard;
