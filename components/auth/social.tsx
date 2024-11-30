"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size='lg' variant="outline" className="w-full" onClick={() => {}}>
        <FcGoogle className="w-6 h-6" />
      </Button>
      <Button size='lg' variant="outline" className="w-full" onClick={() => {}}>
        <FaGithub className="w-6 h-6" />
      </Button>
    </div>
  );
};
