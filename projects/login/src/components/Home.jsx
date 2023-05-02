import React from "react";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, logout, loading } = useAuth();
  console.log(user)
  const handleLogout = async () => {
   try {
     await logout();
   } catch (error){
    console.log(error)
   }
  };

  if (loading) return <h1>Loading...</h1>;
  console.log(user);
  return (
    <div>
      <h1>Welcome {user.displayName || user.email} </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
