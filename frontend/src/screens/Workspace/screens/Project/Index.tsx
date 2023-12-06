import { Chip, Input, ScrollShadow, Tab, Tabs } from "@nextui-org/react";
import { Search } from "lucide-react";
import { lazy, useState } from "react";



const Tasks = lazy(() => import('./screens/Tasks/Index'))
const Discuss = lazy(() => import('./screens/Discuss/Index'))


const Index = () => {


    return (
        <>
            <section className="flex flex-col justify-stretch p-3 space-y-3 border border-l-gray-100">
                <h1 className="text-2xl font-bold">All Projects </h1>

                <Input  startContent={<Search />}  size="sm" placeholder="Search Project" />

                <Tabs color="primary" size="md" className="font-semibold" variant="light" aria-label="Tabs variants">
                    <Tab key="photos" title={
                        <div className="flex items-center space-x-2">
                            <span>Active</span>
                            <Chip size="sm" variant="faded">9</Chip>
                        </div>
                    } >
                        <ScrollShadow>
                            <h1>Hello </h1>
                        </ScrollShadow>

                    </Tab>
                    <Tab key="music" title={<div className="flex items-center space-x-2">
                        <span>On Hold</span>
                        <Chip size="sm" variant="faded">9</Chip>
                    </div>} />
                    <Tab key="videos" title={<div className="flex items-center space-x-2">
                        <span>Closed</span>
                        <Chip size="sm" variant="faded">9</Chip>
                    </div>} />
                </Tabs>
            </section>
            <section className="flex flex-col justify-stretch  flex-1">
                <div className="bg-white w-full pt-3 px-3">
                    <div className="flex-1">
                        <h1 className="font-bold text-2xl">
                            Project Name
                        </h1>
                    </div>

                </div>
                <div className="flex flex-col flex-1">
                    <Tabs variant="underlined">
                        <Tab key="task" title="Tasks" >
                            <ScrollShadow>
                                <div className="bg-gray-100 h-auto p-3  w-full">
                                    <Tasks />
                                </div>
                            </ScrollShadow>
                        </Tab>
                        <Tab key="discuss" title="Discussion" >
                            <ScrollShadow>
                                <div className="bg-gray-100 h-auto p-3  w-full">
                                    <Discuss />
                                </div>
                            </ScrollShadow>
                        </Tab>
                    </Tabs>
                </div>

            </section>

        </>
    );
}

export default Index