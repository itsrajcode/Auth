import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <div className="font-semibold text-4xl h-screen w-100 flex justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500 via-fuchsia-500 to-pink-500">
      <LoginButton>
        <Button>Button</Button>
      </LoginButton>
    </div>
  );
}

export default page;
