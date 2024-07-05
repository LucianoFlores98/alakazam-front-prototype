
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, User} from "@nextui-org/react";
import {PlusIcon} from "./PlusIcon.jsx";

const Dropdown_user = () => {
  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: "before:bg-default-200", // change arrow background
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger>
        <button
              type="button"
              class="inline-flex items-center relative px-1 border rounded-full hover:shadow-lg"
            >
              <div class="pl-1">
                <PlusIcon className="text-large" />
              </div>

              <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-4 py-1">
                <div class="rounded-full h-full w-full">
                  <img
                    src="/img/profile.png"
                    alt="Mariano"
                    class="rounded-full h-full w-full"
                  />
                </div>
              </div>
        </button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            isReadOnly
            key="profile"
            className="h-14 gap-2 opacity-100"
          >
            <User
              name="Marianela Atorranta"
              description="@marybb69"
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "sm",
                src: "/img/profile.png",
              }}
            />
          </DropdownItem>
          <DropdownItem key="dashboard">
            Mi perfil
          </DropdownItem>
          <DropdownItem key="settings">Mis Favoritos</DropdownItem>
          <DropdownItem
            key="new_project"
          >
            Mis publicaciones
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem
            isReadOnly
            key="theme"
            className="cursor-default"
            endContent={
              <select
                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                id="theme"
                name="theme"
              >
                <option>System</option>
                <option>Dark</option>
                <option>Light</option>
              </select>
            }
          >
            Tema
          </DropdownItem>
        </DropdownSection>  

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">
            Ayuda
          </DropdownItem>
          <DropdownItem key="logout">Cerrar Sesión</DropdownItem>
        </DropdownSection> 
      </DropdownMenu>

      
    </Dropdown>
  );
}

export default Dropdown_user