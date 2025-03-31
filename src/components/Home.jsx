import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);

  return (  
    <div className="container">
      <h2>CRUD application</h2>
      <Link to='/create' className="btn btn-success my-3">Create + </Link>
      <table className="table">
        <thead>
          <tr>
            <th>TD</th>
            <th>Name</th>
            <th>Age</th>
            <th>Technology</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => {
                return (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.technology}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                            <button className="btn btn-sm btn-danger ms-2">Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;