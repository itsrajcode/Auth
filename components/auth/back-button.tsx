"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <div className="w-full flex justify-center">
      <Button
        variant="link"
        className="font-normal"
        size="sm"
      >
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
};
