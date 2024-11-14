import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Home } from "./pages/Home";
import { Footer } from "./Footer/Footer";
import { HomeSection } from "./components/HomeSection";
import { PublicationsSection } from "./components/HomeSection3";
import { OnlineServices } from "./components/OnlineServices";
import { RecentPhotos } from "./components/RecentPhotos";
import { RecentVideos } from "./components/RecentVideos";


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
                    path:"/publicationssection",
                    element:<PublicationsSection/>
                },
                {
                    path:"/onlineservices",
                    element:<OnlineServices/>
                },
                {
                    path:"/recentphotos",
                    element:<RecentPhotos/>
                },
                {
                    path:"/recentvideos",
                    element:<RecentVideos/>
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};
