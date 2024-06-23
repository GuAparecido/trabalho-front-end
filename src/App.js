import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Login from './pages/Login';
import Profile from './pages/Profile';
import React from 'react';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllCards from './pages/AllCards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/cards",
    element: <AllCards />,
  },

]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
