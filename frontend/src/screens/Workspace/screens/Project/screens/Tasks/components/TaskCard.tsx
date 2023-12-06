import { Avatar, AvatarGroup, Button, Card, CardBody, CardFooter, CardHeader, Chip, ScrollShadow } from "@nextui-org/react"
import { MoreVertical, Scroll } from "lucide-react"
import React from "react"

export const TaskCard = () => {
    return (
        <Card radius="md" isPressable={true} disableRipple className=" py-2 w-64 border-none">
            <CardHeader className="pb-0 py-2 flex justify-between items-start">
                <div className="flex-1 flex gap-2 flex-wrap">
                    <Chip color="warning" variant="flat">Requirement gathering</Chip>
                    <Chip color="success" variant="flat" >UI/UX</Chip>
                </div>

                <Button size="sm" variant="light" className="" isIconOnly={true}>
                    <MoreVertical />
                </Button>
            </CardHeader>
            <CardBody className="overflow-visible py-2 ">
                <h1 className="font-semibold">Lorem ipsum, dolor sit </h1>

            </CardBody>

            <CardFooter className="flex justify-between items-center">
                <h1 className="text-gray-600">Assigned to</h1>
                <AvatarGroup isBordered>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </AvatarGroup>
            </CardFooter>
        </Card>
    )
}