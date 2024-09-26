import { Text, clx } from "@medusajs/ui";

import { getCategoriesList, getCollectionsList } from "@lib/data";

import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";

import { useState } from 'react'; // Import useState hook for popup state

// Mark the component as a Client Component (on a separate line)
use client;

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6);
  const { product_categories } = await getCategoriesList(0, 6);

  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          {/* Rest of the code remains the same... */}

          <div className="flex flex-col gap-y-2">
            <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
            <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ui-fg-base"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ui-fg-base"
                >
                  Documentation
                </a>
              </li>
              <li>
                <button onClick={handleOpenPopup} className="hover:text-ui-fg-base">
                  Source code
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Popup logic */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4">
            <p>How are you?</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}

      <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
        <Text className="txt-compact-small">
          © {new Date().getFullYear()} Medusa Store. All rights reserved.
        </Text>
        <MedusaCTA />
      </div>
    </footer>
  );
}
