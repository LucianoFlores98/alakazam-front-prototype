import React from "react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";

const Checkbox_filter = ()=> {
  const [selected, setSelected] = React.useState([]);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-default-500 text-small">Seleccionado: {selected.join(", ")}</p>
      <CheckboxGroup
        label="Tipo Inmueble"
        color="primary"
        value={selected}
        onValueChange={setSelected}
      >
        <Checkbox className="ml-1" value="Casa">Casa</Checkbox>
        <Checkbox className="ml-1" value="Departamento">Departamento</Checkbox>
        <Checkbox className="ml-1" value="Local">Local</Checkbox>
        <Checkbox className="ml-1" value="Oficina">Oficina</Checkbox>
        <Checkbox className="ml-1" value="Habitación">Habitación</Checkbox>
        <Checkbox className="ml-1" value="Penthouse">Penthouse</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup
        label="Dormitorios"
        color="primary"
        value={selected}
        onValueChange={setSelected}
      >
        <Checkbox className="ml-1" value="Monoambiente">Monoambiente</Checkbox>
        <Checkbox className="ml-1" value="1 dorm">1 dormitorio</Checkbox>
        <Checkbox className="ml-1" value="2 dorm">2 dormitorios</Checkbox>
      </CheckboxGroup>

    </div>
  );
}
export default Checkbox_filter