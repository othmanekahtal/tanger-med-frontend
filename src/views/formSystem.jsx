// const form_system = async () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [lateCost, setLateCost] = useState("");
//   const [capacityPerQuais, setCapacityPerQuais] = useState("");
//   const [quaisFeePerDay, setQuaisFeePerDay] = useState("");
//   const [storageDeadLine, setStorageDeadLine] = useState("");
//   const [loading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   if (localStorage.getItem("token")) {
//   //     return navigate("/");
//   //   }
//   // }, [navigate]);

//   // useEffect(async () => {
//   //   if (!update) {
//   //     //TODO:get data into context api;
//   //     console.log("will fetching data");
//   //     setLoading(true);
//   //     let response = await useFetch.get(
//   //       // "https://tanger-med-tech.herokuapp.com/api/v1/login",
//   //       "http://localhost:8080/api/v1/system",
//   //       localStorage.getItem("token")
//   //     );
//   //     const data = await response.json();
//   //     const { status } = response;
//   //     setLoading(false);
//   //     if (status == 401) {
//   //       return toast.error("You need authorization to access this page!");
//   //       navigate("/");
//   //     }
//   //   }
//   // }, []);
//   const nameInput = {
//     type: "text",
//     labelValue: "system name",
//     value: name,
//     onChangeAction: (e) => setName(e.target.value),
//     placeholder: "system name",
//   };
//   const lateCostInput = {
//     type: "number",
//     labelValue: "late cost",
//     value: lateCost,
//     onChangeAction: (e) => setLateCost(e.target.value),
//     placeholder: "100$",
//   };
//   const sendData = async () => {
//     console.log("todo");
//   };
//   return (
//     <div className="w-full flex justify-center items-center h-screen ">
//       <Toaster />
//       <div className="mt-20">
//         <h2 className="text-2xl dark:text-gray-300 text-center mb-5">
//           {/* {update ? "configure System" : "update system"} */}
//         </h2>
//         <form onSubmit={sendData}>
//           <Input {...nameInput} />
//           <Input {...lateCostInput} />

//           <button
//             type="submit"
//             className={`text-white dark:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
//               ${
//                 !name || !lateCost || loading
//                   ? "cursor-not-allowed"
//                   : "cursor-pointer"
//               }`}
//           >
//             {loading ? <SyncOutlined spin /> : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import toast, { Toaster } from "react-hot-toast";
import { SyncOutlined } from "@ant-design/icons";
import Input from "@/components/input";
const form_system = ({ update }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lateCost, setLateCost] = useState("");
  const [capacityPerQuais, setCapacityPerQuais] = useState("");
  const [quaisFeePerDay, setQuaisFeePerDay] = useState("");
  const [storageDeadLine, setStorageDeadLine] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    if (!update) {
      // console.log("will fetching data");
      // setLoading(true);
      // let response = await useFetch.get(
      //   // "https://tanger-med-tech.herokuapp.com/api/v1/login",
      //   "http://localhost:8080/api/v1/system",
      //   localStorage.getItem("token")
      // );
      // const data = await response.json();
      // const { status } = response;
      // setLoading(false);
      // if (status == 401) {
      //   return toast.error("You need authorization to access this page!");
      //   navigate("/");
      // }
    }
  }, []);
  return (
    <>
      <div>test</div>
    </>
  );
};

export default form_system;
