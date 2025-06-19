import { Outlet } from "react-router-dom";
import Navbar from "./navBar";

function Layout() {
    return(
        <div className="layout">
            <Navbar />
            <div className="content">
                {/* Aquí se renderizarán las páginas hijas */}
                <Outlet />
            </div>
        </div>
    )
    
}

export default Layout;