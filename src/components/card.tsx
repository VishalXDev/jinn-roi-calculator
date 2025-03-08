import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="bg-white p-6 shadow-lg rounded-2xl">{children}</div>;
}

export default Card;
