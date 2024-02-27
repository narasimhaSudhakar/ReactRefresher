import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["burger", "tomatoes"],
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items.pop();
    },
    clear: () => {
      return { items: [] };
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: { users: ["NSS", "Saroja", "Meena", "Rajee"] },
  reducer: {
    addUser: (state, action) => {
      state.items.push(action.payload);
    },
    removeUser: (state, action) => {
      state.items.pop();
    },
    clearUser: (state, action) => {
      return { items: [] };
    },
  },
});

export const { add, remove, clear } = cartSlice.actions;
export const { addUser, removeUser, clearUser } = userSlice.actions;
export default cartSlice.reducer;
