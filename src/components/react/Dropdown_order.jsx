import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Dropdown_order= ()=> {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Recomendados"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          className="capitalize bg-primary_2/80 text-white py-0"
        > <span className="mr-1">Ordenar por:</span>
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="recomendados">Recomendados</DropdownItem>
        <DropdownItem key="precio_bajo">Precio: Más bajo</DropdownItem>
        <DropdownItem key="precio_alto">Precio: Más alto</DropdownItem>
        <DropdownItem key="mas_cerca">Distancia: Más cerca</DropdownItem>
        <DropdownItem key="mas_lejos">Distancia: Más lejos</DropdownItem>
        <DropdownItem key="recientes">Fecha de publicación: Más recientes</DropdownItem>
        <DropdownItem key="antiguos">Fecha de publicación: Más antiguos</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Dropdown_order;
