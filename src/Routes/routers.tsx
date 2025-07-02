import Main from "@/Layout/Main";
import AddBook from "@/Pages/AddBook";
import AllBooks from "@/Pages/AllBooks";
import BorrowSummary from "@/Pages/BorrowSummary";

import { createBrowserRouter } from "react-router";


export const routers = createBrowserRouter([
 {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element:<AllBooks></AllBooks>
        },
        {
            path: "/addBooks",
            element:<AddBook></AddBook>
        },
        {
            path: "/borrowSummary",
            element:<BorrowSummary></BorrowSummary>
        },

   
    ]
 }


]);