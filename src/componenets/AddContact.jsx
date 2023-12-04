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
import { useDispatch } from "react-redux";
import { add } from "../redux/action";
export const AddContact = ({ setisOpen }) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  return (
    <>
      <Center>
        <FormControl w="50%">
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="text"
            onChange={(e) => {
              setData({ ...data, phone: e.target.value });
            }}
          />
          <FormLabel>Label</FormLabel>
          <Select
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
              setisOpen(false);
              add(dispatch, data);
            }}
          >
            Add
          </Button>
        </FormControl>
      </Center>
    </>
  );
};
