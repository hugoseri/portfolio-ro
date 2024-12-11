import type React from "react";
import type { PropsWithChildren } from "react";

export interface CardProps {
  className?: string,
}

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
  className = '',
  children
}) => {

  return (
    <div className={`rounded-3xl max-sm:p-8 bg-skin-card max-w-5xl ${className}`}>
      {children}
    </div>
  );
}
