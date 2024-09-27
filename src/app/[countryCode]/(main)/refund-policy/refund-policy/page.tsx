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
    <div className="refund-policy-container">
      <h1>Refund Policy</h1>

      <p>Effective Date: [Insert Date]</p>

      <h2>1. Overview</h2>
      <p>We value customer satisfaction and aim to offer products and services of the highest quality. If you are not fully satisfied with your purchase, we are here to help. This policy outlines the conditions under which we accept refunds.</p>

      <h2>2. Refund Eligibility</h2>
      <p>Refunds will be processed only if:</p>
      <ul>
        <li>The item is unused, in the same condition as received, and in its original packaging.</li>
        <li>You provide a valid receipt or proof of purchase.</li>
        <li>The return request is made within [X] days of purchase.</li>
      </ul>

      <h2>3. Non-Refundable Items</h2>
      <p>Certain types of goods are exempt from being returned, including:</p>
      <ul>
        <li>Perishable items (e.g., food, flowers).</li>
        <li>Gift cards and downloadable software products.</li>
        <li>Personal care items (e.g., cosmetics).</li>
      </ul>

      <h2>4. Refund Process</h2>
      <p>To start a return, please contact our customer service team at <a href="mailto:support@yourstore.com">support@yourstore.com</a>. If your return is accepted, we will provide instructions for sending the item back to us.</p>
      <p>Upon receiving your item, we will inspect it and notify you of the status of your refund. If approved, the refund will be processed, and a credit will be applied to your original method of payment within [X] days.</p>

      <h2>5. Late or Missing Refunds</h2>
      <p>If you haven’t received a refund after the processing time, check your bank account or contact your credit card provider. If the issue persists, please contact us at <a href="mailto:support@yourstore.com">support@yourstore.com</a>.</p>

      <h2>6. Shipping Returns</h2>
      <p>Customers are responsible for paying shipping costs for returning items. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>

      <h2>7. Contact Us</h2>
      <p>If you have any questions about our refund policy, please contact us at <a href="mailto:support@yourstore.com">support@yourstore.com</a>.</p>
    </div>
  )
}

export default RefundPolicy
