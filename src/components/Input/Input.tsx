import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  placeholdr?: string;
  disasabled?: boolean;
  isLoading?: boolean;
}

export const Input = ({
  children,
  variant = "primary",
  isLoading = false,
  placeholder = "Search...",
  disabled = false,
  className = "",
  ...props
}: InputProps) => {
  const baseStyles =
    "h-(--my-height) border border-gray-900 rounded-sm focus:border-blue-300 text-gray-900";
  const variants = {
    primary: "bg-white",
    secondary: "bg-gray-50",
    danger: "bg-red-50",
    ghost: "bg-transparent",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <input
      className={combinedClasses}
      placeholder={isLoading ? "" : placeholder}
      disabled={disabled || isLoading}
      {...props}
    />
  );
};
