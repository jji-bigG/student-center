// "use client";

import { Fragment, ReactNode, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  CalendarDaysIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";

import Input from "~/components/inputs/input_with_overlapping_label";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

export default function Example({ children }: { children: ReactNode }) {
  const [dates, setDates] = useState<DateValueType>(null);

  return (
    <Popover className="relative">
      <Popover.Button
        as="span"
        className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
      >
        {children}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-0 z-10 mt-5 flex w-screen max-w-max translate-x-[-72%] px-4">
          <form className="z-1 w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            {/* the form in adding an event */}
            <div className="mx-7 my-3 p-4">
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
                Add new event
              </h3>

              <div className="mt-5">
                <Input label="Event Title" />
                <h5>Select dates</h5>
                <div className="z-20">
                  <Datepicker
                    classNames={{}}
                    value={dates}
                    onChange={(v) => setDates(v)}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              <button className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                <CalendarDaysIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
                Add
              </button>
              <button className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                <EnvelopeOpenIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
                Invite
              </button>
            </div>
          </form>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
