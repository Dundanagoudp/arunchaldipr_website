import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Home } from "./pages/Home";
import { Footer } from "./Footer/Footer";
import { HomeSection } from "./components/HomeSection";

import { About } from "./pages/About";
import { Whowho } from "./pages/WhoWho";
import { Media } from "./pages/Media";
import { Contact } from "./pages/Contact";


export const App = () => {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home  /> 
                },            
                {
                    path: "/footer",
                    element: <Footer />
                },
                {
                    path:"/homesection",
                    element:<HomeSection/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/whowho",
                    element:<Whowho/>
                },
                {
                    path:"/media",
                    element:<Media/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};
