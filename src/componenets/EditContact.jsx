/* eslint-disable react/prop-types */
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Center,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { updateUser } from "../redux/action";
import { useDispatch } from "react-redux";

export const EditContact = ({ user, setisEdit }) => {
  const [data, setData] = useState(user);
  const dispatch = useDispatch();
  return (
    <>
      <Center>
        <FormControl w="50%">
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
          <FormLabel>Email</FormLabel>
          <Input
            value={data.email}
            type="email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <FormLabel>Phone Number</FormLabel>
          <Input
            value={data.phone}
            type="text"
            onChange={(e) => {
              setData({ ...data, phone: e.target.value });
            }}
          />
          <FormLabel>Label</FormLabel>
          <Select
            value={data.label}
            placeholder="Select Label"
            onChange={(e) => {
              setData({ ...data, label: e.target.value });
            }}
          >
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="friends">Friends</option>
            <option value="family">Family</option>
          </Select>
          <Button
            ml="50%"
            mt="10px"
            onClick={() => {
              setisEdit({ bool: false });
              updateUser(dispatch, data);
            }}
          >
            Update
          </Button>
        </FormControl>
      </Center>
    </>
  );
};
