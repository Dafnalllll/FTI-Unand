// components/ui/Input.tsx

import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

export default function Input({
  icon = true,
  className = "",
  ...props
}: InputProps) {
  return (
    <div
      className="
        flex items-center gap-2.5
        rounded-full
        border border-slate-200
        bg-gray-100
        px-4 py-2
        transition-all duration-300
        focus-within:border-gray-300
        focus-within:bg-white
        focus-within:shadow-[0_0_0_3px_rgba(148,163,184,0.1)]
      "
    >
      {icon && <Search size={16} className="text-gray-600" />}

      <input
        {...props}
        className={`
          w-28
          bg-transparent
          text-sm text-gray-600
          placeholder:text-gray-400
          outline-none
          transition-all duration-300
          focus:w-40
          ${className}
        `}
      />
    </div>
  );
}
