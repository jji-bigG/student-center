/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

export default function InputValidationError({
  label,
  placeholder,
  defaultValue,
  error,
}: {
  label: string;
  placeholder: string;
  defaultValue?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : ""}
          aria-invalid="true"
          aria-describedby="email-error"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {error ? (
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        {error}
      </p>
    </div>
  );
}
