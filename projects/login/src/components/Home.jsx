import React from "react";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, logout, loading } = useAuth();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) return <h1>Loading...</h1>;
  console.log(user);
  
  return (
    <div className='w-full max-w-xs m-auto text-black'>
      <div className='bg-white rounded shadow-md px-8 pt-6- pb-8 mb-4'>
        <h1 className='text-xl mb-4'>
          Welcome {user.displayName || user.email}
        </h1>
        <button
          onClick={handleLogout}
          className='bg-slate-200 hover:bg-slate-300 text-black py-2 px-4 rounded'
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
