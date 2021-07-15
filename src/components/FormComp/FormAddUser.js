import React from "react";

const FormAddUser = (props) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 addUser">
        <form className="" onSubmit={props.onSubmitHandler}>
          <div className="form-group mb-3">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
              value={props.User.name}
              name="name"
              onChange={(e) => props.inputChangeHanlder(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleFormControlSelect1">Gender</label>
            <select
              className="form-control"
              value={props.User.gender}
              id="exampleFormControlSelect1"
              name="gender"
              onChange={(e) => props.inputChangeHanlder(e)}
            >
              <option>Please select gender</option>
              <option name="gender">Male</option>
              <option name="gender">Female</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={props.User.email}
              name="email"
              onChange={(e) => props.inputChangeHanlder(e)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="exampleFormControlInput1">Phone</label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="phone"
              value={props.User.phone}
              name="phone"
              onChange={(e) => props.inputChangeHanlder(e)}
            />
          </div>
          <div className="form-group mb-3">
            <button
              type="submit"
              className={
                props.btnTitle === "Add User"
                  ? "btn btn-success"
                  : "btn btn-primary"
              }
            >
              {props.btnTitle}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddUser;
