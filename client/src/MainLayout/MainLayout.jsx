import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Nav from "../Nav/Nav";
import Footer from "../Pages/Home/Footer/Footer";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="pt-16"><Outlet></Outlet></div>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLayout;