import React from "react";
import {Badge} from "@nextui-org/react";
import { Icon } from "astro-icon/components";

const Notification = () => {
  const [isInvisible, setIsInvisible] = React.useState(false);

  return (
        <Badge color="danger" content={5} isInvisible={isInvisible} shape="circle">
          <Icon name="notifications_40dp" />
        </Badge>

  );
}

export default Notification;