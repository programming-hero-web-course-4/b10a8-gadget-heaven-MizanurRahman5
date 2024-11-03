import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorMessage from "../component/ErrorMessage/ErrorMessage";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistic from "../Pages/Statistic";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorMessage></ErrorMessage>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/dashboard',
            element:<Dashboard/>
        },
        {
            path:'/statistic',
            element: <Statistic/>

        }
      ]

    },
  ]);

  export default router