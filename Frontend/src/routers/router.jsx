import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home";
import CreatingExam from "../pages/CreatingExam/creatingExam";
import App from "../App";
const router = createBrowserRouter([
    {
        path: "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/create-exam",
                element : <CreatingExam/>
            }
        ]
    },
])

export default router;