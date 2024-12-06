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
    <div className={`rounded-3xl max-sm:p-8 sm:py-10 sm:px-20 bg-skin-card min-w-max ${className}`}>
      {children}
    </div>
  );
}
