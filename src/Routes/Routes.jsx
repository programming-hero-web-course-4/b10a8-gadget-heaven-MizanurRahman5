import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorMessage from "../component/ErrorMessage/ErrorMessage";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistic from "../Pages/Statistic";
import Products from "../component/Products";
import ProductDetails from "../component/ProductDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorMessage></ErrorMessage>,
      children:[
        {
            path:'/',
            element:<Home/>,
            loader: () => fetch('../category.json'),
            children:[
                {
                    path:'/',
                    element:<Products/>,
                    loader: () => fetch('/data.json')
                },
                {
                    path:'/category/All',
                    element:<Products/>,
                    loader: () => fetch('/data.json')
                },
                {
                    path:'/category/:category',
                    element:<Products/>,
                    loader: () => fetch('/data.json')
                }
            ]
               
        },
        {
            path:'product/:productId',
            element:<ProductDetails/>,
            loader: () => fetch('/data.json')
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