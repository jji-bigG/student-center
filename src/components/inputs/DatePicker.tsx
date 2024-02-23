import React, { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DatePicker() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [years, setYears] = useState(new Date().getFullYear());

  return (
    <div>
      {/* <!-- Datepicker --> */}
      <div className="flex w-80 flex-col overflow-hidden rounded-xl border bg-white shadow-lg dark:border-gray-700 dark:bg-slate-900">
        <div className="p-3">
          {/* <!-- Calendar --> */}
          <div className="space-y-0.5">
            {/* <!-- Months --> */}
            <div className="mx-1.5 grid grid-cols-5 items-center gap-x-3 pb-3">
              {/* <!-- Prev Button --> */}
              <div className="col-span-1">
                <button
                  type="button"
                  className="flex size-8 items-center justify-center rounded-full text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    className="size-4 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
              </div>

              {/* <!-- End Prev Button --> */}

              {/* <!-- Month / Year --> */}
              <div className="col-span-3 flex items-center justify-center gap-x-1">
                <div className="relative">
                  <select
                    value={month}
                    onChange={(e) => setMonth(Number.parseInt(e.target.value))}
                    data-hs-select='{
                    "placeholder": "Select month",
                    "toggleTag": "<button type=\"button\"></button>",
                    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-gray-200 dark:hover:text-gray-300 dark:focus:text-gray-300",
                    "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900 dark:border-gray-700",
                    "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
                    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-gray-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                  }'
                    // className="hidden"
                  >
                    {months.map((m, i) => (
                      <option value={i}>{m}</option>
                    ))}
                  </select>
                </div>

                <span className="text-gray-800 dark:text-gray-200">/</span>

                <div className="relative">
                  <select
                    value={years}
                    onChange={(e) => setYears(Number.parseInt(e.target.value))}
                    data-hs-select='{
                    "placeholder": "Select year",
                    "toggleTag": "<button type=\"button\"></button>",
                    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-gray-200 dark:hover:text-gray-300 dark:focus:text-gray-300",
                    "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900 dark:border-gray-700",
                    "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
                    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-gray-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                  }'
                    // className="hidden"
                  >
                    {[...Array(30).keys()].map((i) => (
                      <option value={new Date().getFullYear() - 10 + i}>
                        {new Date().getFullYear() - 10 + i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* <!-- End Month / Year --> */}

              {/* <!-- Next Button --> */}
              <div className="col-span-1 flex justify-end">
                <button
                  type="button"
                  className="flex size-8 items-center justify-center rounded-full text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    className="size-4 flex-shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>

              {/* <!-- End Next Button --> */}
            </div>

            {/* <!-- Months --> */}

            {/* <!-- Weeks --> */}
            <div className="flex pb-1.5">
              <span className="m-px block w-10 text-center text-sm text-gray-500">
                Mo
              </span>
              <span className="m-px block w-10 text-center text-sm text-gray-500">
                Tu
              </span>
              <span className="m-px block w-10 text-center text-sm text-gray-500">
                We
              </span>
              <span className="m-px block w-10 text-center text-sm text-gray-500">
                Th
              </span>
              <span className="m-px block w-10 text-center text-sm text-gray-500">
                Fr
              </span>
              <span className="m-px block w-10 text-center text-sm text-gray-500">
                Sa
              </span>
              <span className="m-px block w-10 text-center text-sm text-gray-500">
                Su
              </span>
            </div>

            {/* <!-- Weeks --> */}

            {/* <!-- Days --> */}
            <div className="flex">
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  26
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  27
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  28
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  29
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  30
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  1
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  2
                </button>
              </div>
            </div>

            {/* <!-- Days --> */}

            {/* <!-- Days --> */}
            <div className="flex">
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  3
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  4
                </button>
              </div>
              <div className="rounded-s-full bg-gray-100 dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent bg-blue-600 text-sm font-medium text-white hover:border-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:bg-blue-500 dark:hover:border-gray-700"
                >
                  5
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  6
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  7
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  8
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  9
                </button>
              </div>
            </div>

            {/* <!-- Days --> */}

            {/* <!-- Days --> */}
            <div className="flex">
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  10
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  11
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  12
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  13
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  14
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  15
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  16
                </button>
              </div>
            </div>

            {/* <!-- Days --> */}

            {/* <!-- Days --> */}
            <div className="flex">
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  17
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  18
                </button>
              </div>
              <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  19
                </button>
              </div>
              <div className="rounded-e-full bg-gray-100 dark:bg-gray-800">
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent bg-blue-600 text-sm font-medium text-white hover:border-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:bg-blue-500 dark:hover:border-gray-700"
                >
                  20
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  21
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  22
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  23
                </button>
              </div>
            </div>

            {/* <!-- Days --> */}

            {/* <!-- Days --> */}
            <div className="flex">
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  24
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  25
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  26
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  27
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  28
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  29
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  30
                </button>
              </div>
            </div>

            {/* <!-- Days --> */}

            {/* <!-- Days --> */}
            <div className="flex">
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  31
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  1
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  2
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  3
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  4
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  5
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                  disabled
                >
                  6
                </button>
              </div>
            </div>

            {/* <!-- Days --> */}
          </div>

          {/* <!-- End Calendar --> */}
        </div>

        {/* <!-- Footer --> */}
        <div className="flex items-center justify-end gap-x-2 border-t p-3 dark:border-gray-700">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Cancel
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Apply
          </button>
        </div>

        {/* <!-- End Footer --> */}
      </div>

      {/* <!-- End Datepicker --></div> */}
    </div>
  );
}

export default DatePicker;
