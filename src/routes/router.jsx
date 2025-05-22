import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import AddTask from "../Pages/AddTask";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import BrowseTasks from "../Pages/BrowseTasks";
import TaskCard from "../Components/FeaturedTask";
import TaskDetails from "../Pages/TaskDetails";
import MyPostedTasks from "../Pages/MyPostedTasks";



let router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayouts,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:5000/tasks'),
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
      },
      {
        path: '/browsetask',
        loader: () => fetch('http://localhost:5000/tasks'),
        Component: BrowseTasks
      },
      {
        path: '/taskdetails/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`),
        Component: TaskDetails
      },
      {
        path: '/mypostedtasks',
        Component: MyPostedTasks
      }
    ]
  }
])

export default router;