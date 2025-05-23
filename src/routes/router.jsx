import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import AddTask from "../Pages/AddTask";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import BrowseTasks from "../Pages/BrowseTasks";
import TaskDetails from "../Pages/TaskDetails";
import MyPostedTasks from "../Pages/MyPostedTasks";
import UpdateTask from "../Pages/UpdateTask";
import Error from "../Pages/error";
import PrivateRoute from "../context/PrivetRoute";


let router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:5000/tasks'),
        element: <Home />
      },
      {
        path: '/add-task',
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        )
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/browsetask',
        element: <BrowseTasks />
      },
      {
        path: '/taskdetails/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`),
        element: <PrivateRoute>
          <TaskDetails />
        </PrivateRoute>
      },
      {
        path: '/mypostedtasks',
        element: (
          <PrivateRoute>
            <MyPostedTasks />
          </PrivateRoute>
        )
      },
      {
        path: '/update-task/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateTask />
          </PrivateRoute>
        )
      },

    ]
  } ,
  
  {
        path: '*',
        element: <Error />
     }
]);

export default router;
