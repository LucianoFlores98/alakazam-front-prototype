import {Progress} from "@nextui-org/react";

const RateBars = ()=> {
  return(
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Progress size="sm" aria-label="Loading..." value={30} />
      <Progress size="sm" color="primary" aria-label="Loading..." value={70} />
      <Progress size="sm" color="primary" aria-label="Loading..." value={70} />
      <Progress size="sm" color="primary" aria-label="Loading..." value={70} />
      <Progress size="sm" color="primary" aria-label="Loading..." value={70} />
    </div> 
  );
}

export default RateBars