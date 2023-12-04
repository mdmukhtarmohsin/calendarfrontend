/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAll, getSearch } from "../redux/action";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  HStack,
  Input,
} from "@chakra-ui/react";
import { AddContact } from "./AddContact";
import { EditContact } from "./EditContact";
import { useNavigate } from "react-router-dom";

export const Contacts = () => {
  const [isOpen, setisOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isEdit, setisEdit] = useState({ bool: false, usertoEdit: null });
  const navigate = useNavigate();
  const users = useSelector((store) => {
    return store;
  });
  console.log("users", users);
  const dispatch = useDispatch();
  useEffect(() => {
    getAll(dispatch);
  }, []);
  useEffect(() => {
    if (search == "") {
      getAll(dispatch);
    } else {
      getSearch(dispatch, search);
    }
  }, [search]);
  return (
    <>
      <Input
        placeholder="Search (case sensitive)"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Label</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.length > 0 &&
              users.map((user) => {
                return (
                  <Tr key={user._id}>
                    <Td
                      onClick={() => {
                        navigate(`/appointment/${user._id}`);
                      }}
                    >
                      {user.name}
                    </Td>
                    <Td
                      onClick={() => {
                        navigate(`/appointment/${user._id}`);
                      }}
                    >
                      {user.email}
                    </Td>
                    <Td
                      onClick={() => {
                        navigate(`/appointment/${user._id}`);
                      }}
                    >
                      {user.phone}
                    </Td>
                    <Td
                      onClick={() => {
                        navigate(`/appointment/${user._id}`);
                      }}
                    >
                      {user.label}
                    </Td>
                    <Td>
                      <HStack spacing="24px">
                        <Button
                          onClick={() => {
                            setisEdit({ bool: true, usertoEdit: user });
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={() => {
                            deleteUser(dispatch, user._id);
                          }}
                        >
                          Delete
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack justify="center" align="center" mt="10px">
        <Button
          isDisabled={isOpen}
          onClick={() => {
            setisOpen(true);
          }}
        >
          Add Contact
        </Button>
      </HStack>
      {isOpen && <AddContact setisOpen={setisOpen} />}
      {isEdit.bool && (
        <EditContact user={isEdit.usertoEdit} setisEdit={setisEdit} />
      )}
    </>
  );
};
