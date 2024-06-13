import './App.css';
import Login from './pages/Login';
import Profile from './pages/Profile';

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
