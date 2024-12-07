import type React from "react";
import { useCallback, useState } from "react";
import phoneIcon from "../assets/icons/globe.svg"
import { CheckIcon, CopyCheckIcon, Copy as CopyIcon } from "lucide-react";

export interface CopyProps {
  text: string,
  className?: string,
}

export const Copy: React.FC<CopyProps> = ({
  text,
  className = '',
}) => {
  const [hovering, setHovering] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
  }

  return (
    <button 
      onMouseEnter={() => setHovering(true)} 
      onMouseLeave={() => {
        setHovering(false)
        setCopied(false)
      }} 
      onClick={handleCopy}
      className={`cursor-pointer flex gap-0.5 ${className}`} 
    >
        {text}
        {
          hovering && (
          <div className="flex h-4 w-4">
            <div className="relative mt-1.5">
            <CheckIcon
              className="h-4 text-skin-heading absolute top-0 left-0" 
              strokeWidth={1}
              strokeDasharray={50}
              strokeDashoffset={copied ? 0 : -50}
              style={{
                transition: "all 300ms ease-in-out",
                }} 
            />
            <CopyIcon 
              className="h-4 absolute top-0 left-0" 
              strokeWidth={1}
              strokeDasharray={100}
              strokeDashoffset={copied ? -100 : 0}
              style={{ 
                transition: "all 300ms ease-in-out",
              }} 
            />
            </div>
          </div>
          )
        }
    </button>
  );
}
