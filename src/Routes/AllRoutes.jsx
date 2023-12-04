import { Route, Routes } from "react-router-dom";
import { Contacts } from "../componenets/Contacts";
import { Appointment } from "../componenets/Appointment";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/appointment/:id" element={<Appointment />} />
    </Routes>
  );
};
