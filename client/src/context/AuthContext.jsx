import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // state change hone ke bad page refresh krne pe update ho rha tha to iske liye hm 
  const updateUser = (data)=>{
    setCurrentUser(data);
  };
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser));
  },[currentUser])


  return (
    <AuthContext.Provider value={{currentUser, updateUser}}>{children}</AuthContext.Provider>
  );


};
