import React, { useEffect, useState } from "react";
import { deleteUsers, getUsers } from "../Servicess/api";
import { Link,} from "react-router-dom";
const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const response = getUsers();
    response.then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  const deleteUserData = (id) => {
    deleteUsers(id);
 
  };
  return (
    <>
      <h2>All Users</h2>
      <table className="table table-bordered table-dark mt-3">
        <thead>
          <tr>
            <th scope="col">UID</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button type="button" className="btn btn-primary mx-3">
                    <Link className="edit" to={`/edit/${user._id}`}>
                      Edit
                    </Link>
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteUserData(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllUser;
