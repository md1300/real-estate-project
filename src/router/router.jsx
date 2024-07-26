import { createBrowserRouter } from "react-router-dom";

import Root from "../Root/Root";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import NotReach from "../NotReach/NotReach";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>
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
])
   
export default router;