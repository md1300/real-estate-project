import { createBrowserRouter } from "react-router-dom";

import Root from "../Root/Root";
import Register from "../Register/Register";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>
    },
    {
        path:"/register",
        element:<Register></Register>
    }
])
   
export default router;