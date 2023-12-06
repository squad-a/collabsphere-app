import React from "react";
import { Input } from '@nextui-org/react'
import { Eye, EyeOff } from "lucide-react";

export const PasswordInput = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return <Input  type={isVisible ? "text":"password"} label="Password" size="md" endContent={<button className="focus:outline-none" type="button" onClick={toggleVisibility}>
        {isVisible ? (
            <Eye className="text-md  text-default-400 pointer-events-none" />
        ) : (
            <EyeOff className="text-md  text-default-400 pointer-events-none" />
        )}
    </button>} />
}