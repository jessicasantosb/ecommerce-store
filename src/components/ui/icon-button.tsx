import { cn } from "@/lib/utils";
import { MouseEventHandler, ReactElement } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className: string;
  icon: ReactElement;
}

export function IconButton({ onClick, className, icon }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 flex items-center justify-center bg-white border rounded-full shadow-md hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
}
