import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, className = "", type = "text", ...props },
  ref,
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-2 pl-1">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-full outline-none border border-gray-300 focus:border-gray-500 rounded-lg px-4 py-2 text-gray-800 ${className}`}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
});

export default Input;
