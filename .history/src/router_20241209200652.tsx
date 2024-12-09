import App from "./APP";
import API_Test from "./API_TEST";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
    [
        {
           path: "/",
           element: <App/>,
        },

        {
            path: "API_test",
            element: <API_Test/>,
        }
        
    ]
);