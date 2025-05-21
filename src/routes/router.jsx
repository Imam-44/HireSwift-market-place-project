import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import AddTask from "../Pages/AddTask";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";



let router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayouts,
   children: [
    {
      index: true,
      loader:()=> fetch('http://localhost:5000/tasks'),
      Component: Home
    },
    {
      path: '/add-task',
      Component: AddTask
    },
    {
      path: '/login',
      Component: Login
    },
    {
      path: '/signup',
      Component: SignUp
    }
   ]
  }
])

export default router;