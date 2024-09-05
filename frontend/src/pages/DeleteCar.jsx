import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteCar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteCar = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/cars/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An Error Occured. Please check console");
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton></BackButton>
      <h1 className="text-3xl my-4">Delete Car</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you Sure you want to Delete this Car?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 rounded-xl w-full"
          onClick={handleDeleteCar}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteCar;
