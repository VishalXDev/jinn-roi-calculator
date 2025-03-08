import { ButtonHTMLAttributes } from "react";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 ${className}`}
      {...props}
    />
  );
}

export default Button;
