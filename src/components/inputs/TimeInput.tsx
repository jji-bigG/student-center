import React from "react";

function TimeInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <div className="w-32 rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
      <label htmlFor="name" className="block text-xs font-medium text-gray-900">
        {label}
      </label>
      <input
        autoComplete="off"
        type="time"
        name="name"
        id="name"
        className="block border-0 p-0 text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TimeInput;
