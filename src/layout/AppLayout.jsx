import { Outlet } from "react-router-dom";
import { Header } from "../navbar/Header";
import { Footer } from "../Footer/Footer";
// import { LanguageProvider } from '../context/LanguageContext';


const AppLayout = () => {
  
  return (
    <>
        {/* <LanguageProvider> */}

      <Header  /> 
      <Outlet  /> 
      <Footer />
      {/* </LanguageProvider> */}

    </>
  );
};

export default AppLayout;
