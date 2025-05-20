import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";



let router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayouts,

  }
])

export default router;