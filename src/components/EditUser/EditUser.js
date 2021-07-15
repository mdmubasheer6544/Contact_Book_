import React, { useEffect, useState } from "react";
import { getUsers, editUsers } from "../Servicess/api";
import { useParams, useHistory } from "react-router-dom";
import FormAddUser from "../FormComp/FormAddUser";
const initialValue = {
  name: "",
  gender: "",
  email: "",
  phone: "",
};
const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState(initialValue);
  useEffect(() => {
    getUsers(id).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  const inputChangeHanlder = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserHandler = (e) => {
    e.preventDefault();
    editUsers(id, user);
    history.push("/");
  };
  return (
    <>
      <h1 className="text-center">Edit User Information</h1>

      {user && (
        <FormAddUser
          User={user}
          onSubmitHandler={editUserHandler}
          inputChangeHanlder={inputChangeHanlder}
          btnTitle="Edit User"
        />
      )}
    </>
  );
};

export default EditUser;
