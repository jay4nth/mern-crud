import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowCar = () => {
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/cars/${id}`)
      .then((res) => {
        setCar(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton></BackButton>
      <h1 className="text-3xl my-4">Show Car</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Id</span>
            <span>{car._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Company</span>
            <span>{car.company}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Model</span>
            <span>{car.model}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Year</span>
            <span>{car.year}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Created Time</span>
            <span>{new Date(car.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">
              Last Update Time
            </span>
            <span>{new Date(car.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCar;
