
import { Text } from "@medusajs/ui";
import { Popover, Transition } from "@headlessui/react"; // For pop-up functionality
import { XMark } from "@medusajs/icons"; // Close icon
import { Fragment } from "react"; // Needed for the Transition component
import { getMedusaData } from "@lib/data/index"; // Server-side data fetching
import MedusaCTA from "@modules/layout/components/medusa-cta";

export default async function Footer() {
  // Fetch server-side data directly
  const data = await getMedusaData();

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <a href="/" className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase">
              Medusa Store
            </a>
          </div>

          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {/* Categories Section */}
            {data?.product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">Categories</span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {data.product_categories.slice(0, 6).map((category) => (
                    <li key={category.id} className="flex flex-col gap-2 text-ui-fg-subtle txt-small">
                      <a href={`/categories/${category.handle}`} className="hover:text-ui-fg-base">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Collections Section */}
            {data?.collections?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">Collections</span>
                <ul className={clx("grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small", { "grid-cols-2": data.collections.length > 3 })}>
                  {data.collections.slice(0, 6).map((collection) => (
                    <li key={collection.id}>
                      <a href={`/collections/${collection.handle}`} className="hover:text-ui-fg-base">
                        {collection.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pop-up for "Source code" */}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a href="https://github.com/medusajs" target="_blank" rel="noreferrer" className="hover:text-ui-fg-base">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://docs.medusajs.com" target="_blank" rel="noreferrer" className="hover:text-ui-fg-base">
                    Documentation
                  </a>
                </li>

                {/* Source code pop-up */}
                <li>
                  <Popover className="relative inline-block">
                    {({ open, close }) => (
                      <>
                        <Popover.Button className="hover:text-ui-fg-base">
                          Source code
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-150"
                          enterFrom="opacity-0"
                          enterTo="opacity-100 backdrop-blur-2xl"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 backdrop-blur-2xl"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute z-10 w-64 p-4 bg-white text-black shadow-lg rounded-lg mt-2">
                            <div className="flex justify-between items-center">
                              <h3 className="text-lg font-semibold">Source Code</h3>
                              <button onClick={() => close()} className="ml-4">
                                <XMark className="w-5 h-5 text-black" />
                              </button>
                            </div>
                            <p className="mt-2 text-sm">
                              You can find the source code for this project at the following link:
                              <a
                                href="https://github.com/medusajs/nextjs-starter-medusa"
                                className="text-blue-600 underline"
                              >
                                GitHub Repository
                              </a>.
                            </p>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">© {new Date().getFullYear()} Medusa Store. All rights reserved.</Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  );
}
