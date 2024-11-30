import { CircleCheck } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) {
    return null;
  }
  return (
    <div className="text-sm p-3 rounded-md flex items-center gap-2  font-medium bg-emerald-500/15 text-emerald-500">
      <CircleCheck className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}
