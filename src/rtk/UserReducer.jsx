import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Alice Johnson", age: 25, technology: "React.js" },
  { id: 2, name: "Bob Smith", age: 30, technology: "Node.js" },
  { id: 3, name: "Charlie Brown", age: 28, technology: "Python" },
  { id: 4, name: "Diana Lee", age: 26, technology: "Java" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers : {
    addUser : (state, action) => {
      // console.log(action);
      state.push(action.payload)
    },
    updateUser : (state, action) => {
      const {id, name, age, technology} = action.payload;
      const userToUpdate = state.find(user => user.id == id);
      if(userToUpdate) {
        userToUpdate.name = name;
        userToUpdate.age = age;
        userToUpdate.technology = technology;
      }
    },
    deleteUser : (state, action) => {
      const {id} = action.payload;
      const userToDelete = state.filter((user) => {
        return user.id == id;
      })
      if(userToDelete) {
        return state.filter(f => f.id !== id);
      }
    }
  }
}); 

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
