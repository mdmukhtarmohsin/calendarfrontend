import { useParams } from "react-router-dom";

export const Appointment = () => {
  const { id } = useParams();
  if (id == 0) {
    return <h1>Click on any Contact from Contact management</h1>;
  }
  console.log(id);
  return <>Implement Appointment for user with id {id}</>;
};
