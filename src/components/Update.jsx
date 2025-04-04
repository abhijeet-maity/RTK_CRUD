import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser} from "../rtk/UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  console.log(users);
  console.log(id);
  const userEditable = users.filter((u) => {
    return u.id == id;
  });
  console.log(userEditable);
  const { name, age, technology } = userEditable[0];
  console.log(userEditable);
  const [userToEdit, setUserToEdit] = useState({
    name,
    age,
    technology,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlaChange(e) {
    const { name, value } = e.target;
    setUserToEdit((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleUpdate(e) {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: userToEdit.name,
        age: userToEdit.age,
        technology: userToEdit.technology,
      })
    );
    navigate("/");
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update user</h3>
        <form action="" onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={userToEdit.name}
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
              value={userToEdit.age}
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
              value={userToEdit.technology}
              className="form-control"
              placeholder="Enter technology"
              onChange={handlaChange}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
