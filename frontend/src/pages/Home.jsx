import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/cars")
      .then((res) => {
        setLoading(false);
        setCars(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Car List</h1>
        <Link to="/cars/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl"></MdOutlineAddBox>
        </Link>
      </div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Company</th>
              <th className="border border-slate-600 rounded-md">Model</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Year
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, i) => (
              <tr key={car._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {i + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {car.company}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {car.model}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {car.year}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/cars/details/${car._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800"></BsInfoCircle>
                    </Link>
                    <Link to={`/cars/edit/${car._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600"></AiOutlineEdit>
                    </Link>
                    <Link to={`/cars/delete/${car._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600"></MdOutlineDelete>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
