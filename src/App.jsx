import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Home } from "./pages/Home";
import { Footer } from "./Footer/Footer";
import { HomeSection } from "./components/HomeSection";


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
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};
