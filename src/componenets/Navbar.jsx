import { Link, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <HStack
        align="center"
        justify="center"
        spacing="24px"
        h="80px"
        bg="#3A4AD7"
      >
        <Link
          color="white"
          onClick={() => {
            navigate("/");
          }}
        >
          Contact Management
        </Link>
        <Link
          color="white"
          onClick={() => {
            navigate("/appointment/0");
          }}
        >
          Appointment Scheduling
        </Link>
      </HStack>
    </>
  );
};
