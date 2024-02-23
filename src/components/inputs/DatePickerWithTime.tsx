import React from "react";

function DatePickerWithTime() {
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
                    data-hs-select='{
                    "placeholder": "Select month",
                    "toggleTag": "<button type=\"button\"></button>",
                    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-gray-200 dark:hover:text-gray-300 dark:focus:text-gray-300",
                    "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900 dark:border-gray-700",
                    "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
                    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-gray-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                  }'
                    className="hidden"
                  >
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6" selected>
                      July
                    </option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                  </select>
                </div>

                <span className="text-gray-800 dark:text-gray-200">/</span>

                <div className="relative">
                  <select
                    data-hs-select='{
                    "placeholder": "Select year",
                    "toggleTag": "<button type=\"button\"></button>",
                    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-gray-200 dark:hover:text-gray-300 dark:focus:text-gray-300",
                    "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900 dark:border-gray-700",
                    "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
                    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-gray-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                  }'
                    className="hidden"
                  >
                    <option selected>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
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
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  5
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  6
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  7
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  8
                </button>
              </div>
              <div>
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
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  10
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  11
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  12
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  13
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  14
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  15
                </button>
              </div>
              <div>
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
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  17
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  18
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="m-px flex size-10 items-center justify-center rounded-full border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 disabled:pointer-events-none disabled:text-gray-300 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:disabled:text-gray-600"
                >
                  19
                </button>
              </div>
              <div>
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

          {/* <!-- Time --> */}
          <div className="mt-3 flex items-center justify-center gap-x-2">
            {/* <!-- Select --> */}
            <div className="relative">
              <select
                data-hs-select='{
                "placeholder": "Select option...",
                "toggleTag": "<button type=\"button\"></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1 px-2 pe-6 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
                "dropdownClasses": "mt-2 z-50 w-full min-w-24 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700",
                "optionClasses": "hs-selected:bg-gray-100 py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:hs-selected:bg-gray-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
                "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span></div>"
              }'
                className="hidden"
              >
                <option value=""></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option selected>12</option>
              </select>

              <div className="absolute end-2 top-1/2 -translate-y-1/2">
                <svg
                  className="size-3 flex-shrink-0 text-gray-500 dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m7 15 5 5 5-5" />
                  <path d="m7 9 5-5 5 5" />
                </svg>
              </div>
            </div>
            {/* <!-- End Select --> */}

            <span className="text-gray-800 dark:text-white">:</span>

            {/* <!-- Select --> */}
            <div className="relative">
              <select
                data-hs-select='{
                "placeholder": "Select option...",
                "toggleTag": "<button type=\"button\"></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1 px-2 pe-6 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
                "dropdownClasses": "mt-2 z-50 w-full min-w-24 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700",
                "optionClasses": "hs-selected:bg-gray-100 py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:hs-selected:bg-gray-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
                "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span></div>"
              }'
                className="hidden"
              >
                <option value=""></option>
                <option selected>00</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
                <option>46</option>
                <option>47</option>
                <option>48</option>
                <option>49</option>
                <option>50</option>
                <option>51</option>
                <option>52</option>
                <option>53</option>
                <option>54</option>
                <option>55</option>
                <option>56</option>
                <option>57</option>
                <option>58</option>
                <option>59</option>
              </select>

              <div className="absolute end-2 top-1/2 -translate-y-1/2">
                <svg
                  className="size-3 flex-shrink-0 text-gray-500 dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m7 15 5 5 5-5" />
                  <path d="m7 9 5-5 5 5" />
                </svg>
              </div>
            </div>
            {/* <!-- End Select --> */}

            {/* <!-- Select --> */}
            <div className="relative">
              <select
                data-hs-select='{
                "placeholder": "Select option...",
                "toggleTag": "<button type=\"button\"></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1 px-2 pe-6 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
                "dropdownClasses": "mt-2 z-50 w-full min-w-24 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700",
                "optionClasses": "hs-selected:bg-gray-100 py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:hs-selected:bg-gray-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
                "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span></div>"
              }'
                className="hidden"
              >
                <option value=""></option>
                <option selected>PM</option>
                <option>AM</option>
              </select>

              <div className="absolute end-2 top-1/2 -translate-y-1/2">
                <svg
                  className="size-3 flex-shrink-0 text-gray-500 dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m7 15 5 5 5-5" />
                  <path d="m7 9 5-5 5 5" />
                </svg>
              </div>
            </div>
            {/* <!-- End Select --> */}
          </div>
          {/* <!-- End Time --> */}
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

export default DatePickerWithTime;
