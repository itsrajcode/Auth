"use client";

import { Card, CardFooter, CardContent, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./Header";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerlabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerlabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
   <Card className="w-[400px] shadow-md">
    <CardHeader>
      <Header label={headerlabel} />
      </CardHeader>
      <CardContent>
    {children}</CardContent>
    {showSocial && <CardFooter><Social /></CardFooter>}
    <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
        
    </CardFooter>
    </Card>
  );
};


