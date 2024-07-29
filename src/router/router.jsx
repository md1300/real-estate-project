import { createBrowserRouter } from "react-router-dom";

import Root from "../Root/Root";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import NotReach from "../NotReach/NotReach";
import Details from "../Page/Details";
import NotFind from "../NotFind/NotFind";
import LogIn from "../LogIn/LogIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path:"/",
        errorElement:<NotFind/>,
        element:<Root></Root>,
    },
     
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/blank",
        element:<NotFound></NotFound>
    },
    {
        path:"/notreach",
        element:<NotReach></NotReach>
    },

    {
        path:"/details/:id",
        loader:()=>fetch('/estateData.json'),
        element:<PrivateRoute><Details></Details></PrivateRoute>
    },
    {
        path:"/logIn",
        element:<LogIn></LogIn>
    }
])
   
export default router;