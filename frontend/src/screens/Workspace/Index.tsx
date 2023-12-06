import { Outlet } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"


const Index = () => {
    return (
        <>
            <div className="flex">

                <Sidebar />
                    
                <Outlet />
            </div>
        </>
    )

}

export default Index