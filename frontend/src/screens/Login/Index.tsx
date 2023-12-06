import { Button, Divider, Input } from "@nextui-org/react"
import { GithubIcon } from "lucide-react"
import { PasswordInput } from "./components/PasswordInput"
import { Link } from "react-router-dom"


const Index = () => {




    return (
        <section className="flex flex-col gap-3 justify-center items-center  h-screen">
            <h1 className="font-bold text-3xl">Login</h1>
            <div className="grid w-[300px]  ">
                <div className="space-y-1.5">
                    <Button variant="shadow" fullWidth className="w-full font-semibold text-md bg-black text-white " radius="sm"><GithubIcon />
                        <span>Login With Github</span>
                    </Button>
                </div>
                <div className="mt-6 mb-6">
                    <div className=" flex items-center justify-center gap-2 ">
                        <Divider orientation="horizontal" className="w-32" />
                        <span className="font-semibold">OR</span>
                        <Divider orientation="horizontal" className="w-32" />
                    </div>
                </div>
                <div className="space-y-3.5">
                    <Input type="email" label="Email" size="md" />
                    <PasswordInput />

                    <div className="flex items-center space-x-2 ">
                        <h4 className="font-semibold">Don't have an Account?</h4>
                        <Link to="/signup">
                            <span className="font-semibold">
                                Signup
                            </span>
                        </Link>
                    </div>
                    <Link to="/workspace">
                        <Button variant="shadow" fullWidth className="w-full font-semibold text-md bg-black text-white " radius="sm">Login</Button>
                    </Link>
                </div>


            </div>
        </section>
    )
}
export default Index