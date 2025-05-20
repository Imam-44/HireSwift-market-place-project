import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";



let router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayouts,
   children: [
    {
      index: true,
      Component: Home
    }
   ]
  }
])

export default router;