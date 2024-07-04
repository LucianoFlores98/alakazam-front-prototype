import React from "react";
import { Badge } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { NotificationIcon } from "./NotificationIcon";

const Notification = () => {
  const [isInvisible, setIsInvisible] = React.useState(false);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          radius="full"
          isIconOnly
          aria-label="more than 99 notifications"
          variant="light"
          client:visible
          className="text-2xl ml-2"
        >
          <Badge content={5} shape="circle" className="bg-primary text-light">
            <NotificationIcon />
          </Badge>
        </Button>
      </DropdownTrigger>

      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownSection title="Notificaciones" showDivider>
          <DropdownItem key="new" shortcut="⌘N" description="Notificacion 1">
            Notificacionnnnnn
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger zone">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            shortcut="⌘⇧D"
            description="Crear nueva alarma"
          >
            Crear nueva alarma
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Notification;
