import { FocusModal, Heading, Label, Button, Text, clx, useToggleState } from "@medusajs/ui"

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
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
                     <FocusModal>
      <FocusModal.Trigger asChild>
        Privacy Policy
      </FocusModal.Trigger>
      <FocusModal.Content>
        <FocusModal.Header>
          <Button>Save</Button>
        </FocusModal.Header>
        <FocusModal.Body className="flex flex-col items-center py-16">
          <div className="flex w-full max-w-lg flex-col gap-y-8">
            <div className="flex flex-col gap-y-1">
              <Heading>Privacy Policy</Heading>
              <Text className="text-ui-fg-subtle">
                <div className="container mx-auto px-4 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Privacy Policy</h1>

        <p className="text-base text-gray-600 mb-6">
          This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect, or otherwise handle your Personally Identifiable Information in accordance with our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What personal information do we collect from the people that visit our blog, website, or app?</h2>
        <p className="text-base text-gray-600 mb-6">
          When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number, or other details to help you with your experience.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">When do we collect information?</h2>
        <p className="text-base text-gray-600 mb-6">
          We collect information from you when you fill out a form or enter information on our site.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How do we use your information?</h2>
        <p className="text-base text-gray-600 mb-6">
          We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
        </p>
        <ul className="list-disc list-inside text-base text-gray-600 mb-6">
          <li>To personalise users' experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How do we protect visitor information?</h2>
        <p className="text-base text-gray-600 mb-6">
          Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.
        </p>
        <p className="text-base text-gray-600 mb-6">We use regular Malware Scanning.</p>
        <p className="text-base text-gray-600 mb-6">
          Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Do we use 'cookies'?</h2>
        <p className="text-base text-gray-600 mb-6">
          We do not use cookies for tracking purposes. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-party disclosure</h2>
        <p className="text-base text-gray-600 mb-6">
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-party links</h2>
        <p className="text-base text-gray-600 mb-6">
          We do not include or offer third-party products or services on our website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google</h2>
        <p className="text-base text-gray-600 mb-6">
          We have not enabled Google AdSense on our site but we may do so in the future.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">COPPA (Children Online Privacy Protection Act)</h2>
        <p className="text-base text-gray-600 mb-6">
          We do not specifically market to children under 13.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fair Information Practices</h2>
        <p className="text-base text-gray-600 mb-6">
          In order to be in line with Fair Information Practices, we will notify the users via email within 7 business days, should a data breach occur.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">CAN SPAM Act</h2>
        <p className="text-base text-gray-600 mb-6">
          We collect your email address in order to: To be in accordance with CANSPAM, we agree to the following:
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacting Us</h2>
        <p className="text-base text-gray-600 mb-6">
          If there are any questions regarding this privacy policy, you may contact us using the information below.
        </p>
        <p className="text-base text-gray-600">
          Email: <a href="mailto:support@secretgreen.com.au" className="text-blue-600 hover:underline">support@secretgreen.com.au</a>
        </p>
        <p className="text-base text-gray-600">
          Phone: +61386589087
        </p>
      </div>
    </div>
              </Text>
            </div>
          </div>
        </FocusModal.Body>
      </FocusModal.Content>
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
                  <a
                    href="/refund-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
