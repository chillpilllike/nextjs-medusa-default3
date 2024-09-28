import { Heading, Text } from "@medusajs/ui"

import React from 'react'


import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact our staff for more information or help with orders.",
}


const ContactUs = () => {
   return (
 <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="mb-4">
        We're here to help! If you have any questions or concerns, please feel free to reach out to us.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Email</h2>
        <p>
          You can email us at <a href="mailto:support@vitashop.co.nz" className="text-blue-500 underline">support@vitashop.co.nz</a>
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Live Chat</h2>
        <p>
          Click on the chat icon in the bottom right corner to start a live chat with one of our customer service representatives.
        </p>
      </div>

    </div>
  )
}

export default ContactUs
