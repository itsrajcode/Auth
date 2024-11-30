"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild = false,
}: LoginButtonProps) => {

    const router = useRouter();
  const onClick = () => {
    console.log("clicked");
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
        <div>TODO: implement later</div>
    )
  }

  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};
