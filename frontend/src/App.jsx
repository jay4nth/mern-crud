import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateCar from "./pages/CreateCar";
import ShowCar from "./pages/ShowCar";
import EditCar from "./pages/EditCar";
import DeleteCar from "./pages/DeleteCar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars/create" element={<CreateCar />} />
      <Route path="/cars/details/:id" element={<ShowCar />} />
      <Route path="/cars/edit/:id" element={<EditCar />} />
      <Route path="/cars/delete/:id" element={<DeleteCar />} />
    </Routes>
  );
};

export default App;
