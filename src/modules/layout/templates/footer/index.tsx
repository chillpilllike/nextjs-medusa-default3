
import { Text, clx } from "@medusajs/ui"
import { Popover, Transition } from "@headlessui/react"; // Importing Popover and Transition
import { Fragment } from "react";
import { getCategoriesList, getCollectionsList } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              Medusa Store
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {/* Footer Links */}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Documentation</span>
              <ul className="grid grid-cols-1 gap-2">
                <li>
                  <LocalizedClientLink href="/docs">Docs</LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/tutorials">Tutorials</LocalizedClientLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Community</span>
              <ul className="grid grid-cols-1 gap-2">
                <li>
                  <LocalizedClientLink href="/community">Forums</LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/events">Events</LocalizedClientLink>
                </li>
              </ul>
            </div>
            {/* Popover Logic for "Source Code" */}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Source Code</span>
              <Popover className="relative">
                <Popover.Button className="text-small-regular text-ui-fg-subtle">
                  Source Code
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
                  <Popover.Panel className="absolute z-10 w-48 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative p-4 bg-white">
                        <p className="text-sm text-gray-700">How are you</p>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
