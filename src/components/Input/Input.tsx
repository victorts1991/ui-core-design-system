import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  isLoading?: boolean;
}

export const Input = ({
  children,
  variant = "primary",
  isLoading = false,
  className = "",
  ...props
}: InputProps) => {
  return (
    <input
      className={`border-2 rounded-md focus:outline-none focus:ring-2 ${className}`}
      {...props}
    />
  );
};
