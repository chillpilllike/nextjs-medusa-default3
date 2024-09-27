import { Heading, Text } from "@medusajs/ui"

import React from 'react'


import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Read our refund policy and learn about how refunds are processed.",
}


const RefundPolicy = () => {
   return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-[calc(100vh-64px)] p-8">
      <div className="w-full max-w-4xl bg-white p-6 border border-gray-200 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Refund Policy</h1>

        <p className="text-base text-gray-600 mb-6 text-center">Effective Date: [Insert Date]</p>

        <h2 className="text-xl font-medium text-gray-800 mb-4">1. Overview</h2>
        <p className="text-base text-gray-600 mb-4">
          We value customer satisfaction and aim to offer products and services of the highest quality. If you are not fully satisfied with your purchase, we are here to help. This policy outlines the conditions under which we accept refunds.
        </p>

        <h2 className="text-xl font-medium text-gray-800 mb-4">2. Refund Eligibility</h2>
        <p className="text-base text-gray-600 mb-4">
          Refunds will be processed only if:
        </p>
        <ul className="list-disc list-inside text-base text-gray-600 mb-6">
          <li>The item is unused, in the same condition as received, and in its original packaging.</li>
          <li>You provide a valid receipt or proof of purchase.</li>
          <li>The return request is made within [X] days of purchase.</li>
        </ul>

        <h2 className="text-xl font-medium text-gray-800 mb-4">3. Non-Refundable Items</h2>
        <ul className="list-disc list-inside text-base text-gray-600 mb-6">
          <li>Perishable items (e.g., food, flowers).</li>
          <li>Gift cards and downloadable software products.</li>
          <li>Personal care items (e.g., cosmetics).</li>
        </ul>

        <h2 className="text-xl font-medium text-gray-800 mb-4">4. Refund Process</h2>
        <p className="text-base text-gray-600 mb-4">
          To start a return, please contact our customer service team at <a href="mailto:support@yourstore.com" className="text-blue-600 hover:underline">support@yourstore.com</a>. If your return is accepted, we will provide instructions for sending the item back to us.
        </p>

        <h2 className="text-xl font-medium text-gray-800 mb-4">5. Late or Missing Refunds</h2>
        <p className="text-base text-gray-600 mb-6">
          If you haven’t received a refund after the processing time, check your bank account or contact your credit card provider. If the issue persists, please contact us at <a href="mailto:support@yourstore.com" className="text-blue-600 hover:underline">support@yourstore.com</a>.
        </p>

        <h2 className="text-xl font-medium text-gray-800 mb-4">6. Shipping Returns</h2>
        <p className="text-base text-gray-600 mb-6">
          Customers are responsible for paying shipping costs for returning items. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </p>

        <h2 className="text-xl font-medium text-gray-800 mb-4">7. Contact Us</h2>
        <p className="text-base text-gray-600 mb-6">
          If you have any questions about our refund policy, please contact us at <a href="mailto:support@yourstore.com" className="text-blue-600 hover:underline">support@yourstore.com</a>.
        </p>
      </div>
    </div>
  )
}

export default RefundPolicy
