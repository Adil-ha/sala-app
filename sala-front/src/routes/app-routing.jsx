import { createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProductsTable from "../components/ProductsTable";

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
               
            }

            
        ]
    }
])

export default router