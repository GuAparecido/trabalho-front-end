import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Login from './pages/Login';
import React from 'react';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cards from './pages/Cards';
import InfoDigimon from './pages/InfoDigimon';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/info",
    element: <InfoDigimon />,
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
