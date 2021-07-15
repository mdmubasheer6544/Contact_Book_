import React, { useState } from "react";
import { addUsers } from "../Servicess/api";
import { useHistory } from "react-router-dom";
import FormAddUser from "../FormComp/FormAddUser";

const initialValue = {
  name: "",
  gender: "",
  email: "",
  phone: "",
};
const AddUser = () => {
  const history = useHistory();
  const [user, setUser] = useState(initialValue);

  const addUserHandler = (event) => {
    event.preventDefault();
    addUsers(user);
    history.push("/");
  };

  const inputChangeHanlder = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="text-center">Add User</h1>
      {user && (
        <FormAddUser
          User={user}
          onSubmitHandler={addUserHandler}
          inputChangeHanlder={inputChangeHanlder}
          btnTitle="Add User"
        />
      )}
    </>
  );
};

export default AddUser;
