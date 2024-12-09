import App from "./App";
import { Image_test } from "./App";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
    [
        {
           path: "/",
           element: <App/>,
        },

        {
            path: "/image_test",
            element: <Image_test/>,
         },
    ]
);