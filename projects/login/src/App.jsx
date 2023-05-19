import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import Navbar from "./components/Navbar";
import Obras from "./pages/Obras";
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';






function App () {
  return (
    <div className='bg-slate-300 h-screen text-black flex flex-col'>
      <AuthProvider>
        <Navbar />

        <Componente1 />
        <Componente2 />
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/obras'
            element={
              <ProtectedRoute>
                <Obras />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );

  }

export default App
