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
export default function Example({ label, hint, placeholder, getValue, value }) {
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <span className="text-sm leading-6 text-gray-500" id="email-optional">
          {hint}
        </span>
      </div>
      <div className="mt-2">
        <input
          onChange={(e) => getValue(e.target.value)}
          value={value}
          autoComplete="off"
          className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
