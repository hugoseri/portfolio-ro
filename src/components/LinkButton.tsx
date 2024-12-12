import type { PropsWithChildren } from "react";

export interface LinkButtonProps {
  id?: string;
  href: string;
  className?: string;
  ariaLabel?: string;
  title?: string;
  disabled?: boolean;
  blankTarget?: boolean;
}

export const LinkButton: React.FC<PropsWithChildren<LinkButtonProps>> = ({
  id,
  href,
  className = "",
  ariaLabel,
  title,
  disabled = false,
  blankTarget = true,
  children,
}) => {
  if (disabled) {
    return (
      <span
      id={id}
      className={`group flex items-center text-skin-title ${className}`}
      title={title}
      aria-disabled={disabled}
    >
      {children}
    </span>
    ) 
  }

  return (
    <a
      id={id}
      href={href}
      target={blankTarget ? "_blank" : undefined}
      rel="noopener"
      className={`group flex items-center text-skin-base hover:text-skin-title ${className}`}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </a>
  )
}

