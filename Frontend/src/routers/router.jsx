import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home";
import CreatingExam from "../pages/CreatingExam/creatingExam";
import Signup from "../components/Signup";
import App from "../App";
import PaperSolving from "../pages/PaperSolving/PaperSolving";
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
            },
            {
                path : "/signup",
                element : <Signup/>
            },
            {
                path : "/paper/:id",
                element : <PaperSolving/>
            }
        ]
    },
])

export default router;