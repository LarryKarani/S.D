import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { PathName } from "routers/types";

interface SolutionItem {
  name: string;
  description: string;
  href?: PathName;
  icon: any;
  active?: boolean;
}

const CATEGORIES: SolutionItem[] = [
  {
    name: "Women",
    icon: `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 16V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 19H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    description: "New items in 2023 ",
  },
];

export default function DropdownCategories() {
  return (
    <div className="DropdownCategories">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`${open ? "" : "text-opacity-90"}
                group py-2 h-10 sm:h-12 flex items-center rounded-md text-sm sm:text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-0 `}
            >
              <span>Shops</span>
              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70 "}
                  ml-2 h-5 w-5 text-neutral-700 group-hover:text-opacity-80 transition ease-in-out duration-150 `}
                aria-hidden="true"
              />
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
              <Popover.Panel className="absolute z-40 w-80 mt-3.5 transform -translate-x-1/2 left-1/2 sm:px-0">
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid grid-cols-1 gap-5 bg-white dark:bg-neutral-800 p-7 ">
                    {CATEGORIES.map((item, index) => (
                      <Link
                        key={index}
                        to={"/page-collection"}
                        onClick={() => close()}
                        className={`flex items-center focus:outline-none focus-visible:ring-0 ${
                          item.active ? "" : ""
                        }`}
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: item.icon }}
                          className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary-50 rounded-md text-primary-500 sm:h-12 sm:w-12"
                        ></div>
                        <div className="ml-4 space-y-0.5">
                          <p className="text-sm font-medium ">{item.name}</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-300">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* FOOTER */}
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-700">
                    <Link
                      to="/page-collection-2"
                      className="flow-root px-2 py-2 space-y-0.5 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center">
                        <span className="text-sm font-medium ">
                          Go to our shop
                        </span>
                      </div>
                      <span className="block text-sm text-slate-500 dark:text-neutral-400">
                        Look for what you need and love.
                      </span>
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
