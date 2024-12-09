import App from "./App";
import { API_Test } from "./App";

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