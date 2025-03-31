import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../rtk/UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    technology: "",
  });
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  function handlaChange(e) {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, age, technology } = userDetails;
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id: newId, name, age, technology }));
    navigate('/');
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add new user</h3>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              onChange={handlaChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              name="age"
              className="form-control"
              placeholder="Enter age"
              onChange={handlaChange}
            />
          </div>
          <div>
            <label htmlFor="technology">Technology: </label>
            <input
              type="text"
              name="technology"
              className="form-control"
              placeholder="Enter technology"
              onChange={handlaChange}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
