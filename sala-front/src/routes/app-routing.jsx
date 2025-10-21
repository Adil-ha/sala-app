import { createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProductsTable from "../components/ProductsTable";
import Dashboard from "../pages/Dashbord";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "/",
                element: <Navigate to="/homePage" />, 
            },
            {
                path: "/homePage",
                element:<HomePage/>,
               
            },
            {
                path: "/productsTable",
                element:<ProductsTable />,
               
            },
                {
                path: "/dashboard",
                element:<Dashboard />,
               
            }


            
        ]
    }
])

export default router