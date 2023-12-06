import { Avatar, Button, ButtonGroup, Listbox, ListboxItem, } from "@nextui-org/react"
import { Bell, FolderOpenDot, Home } from "lucide-react"
import { Link } from "react-router-dom"

export const Sidebar = () => {

    return (
        <>
            <div className="w-20 border-1 border-gray-200 items-center flex flex-col space-y-3 h-screen bg-slate-50">
                <div>
                    <h1>C</h1>
                </div>

                <div className="flex flex-col space-y-3">
                    <Link to="/workspace">
                    <Home />
                    </Link>
                    <Link to="/workspace/project">
                        <FolderOpenDot />
                    </Link>
                    <Link to="/workspace">
                        <Bell />
                    </Link>
                </div>

                <div className="flex-1 flex flex-col justify-end py-3">
                    <Avatar />
                </div>
            </div>

        </>
    )

}