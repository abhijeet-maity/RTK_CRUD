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
    }
  }
}); 

export const {addUser} = userSlice.actions;
export default userSlice.reducer;
