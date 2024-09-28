import { Heading, Text } from "@medusajs/ui"

import React from 'react'


import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read our refund policy and learn about how refunds are processed.",
}


const TermsPolicy = () => {
   return (
 <div>
      <h2>Terms and Conditions</h2>

      <ol>
        <li>
          <h3>Acceptance of Terms</h3>
          <p>
            By accessing or using this website, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any other policies   
 or agreements referenced herein. If you do not agree with any of these terms, you may not use this website.
          </p>
        </li>

        <li>
          <h3>Use of the Website</h3>
          <p>
            You may use this website only for lawful purposes and in accordance with these Terms and Conditions. You agree not to:
          </p>
          <ul>
            <li>Use the website in any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>
              Engage in any conduct that restricts or inhibits   
 anyone&apos;s use or enjoyment of the website, or which, as determined by us, may harm the website or users of the website or expose them to liability.
            </li>   


            <li>Use the website to impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or   
 entity.</li>
            <li>
              Interfere with or disrupt   
 the operation of the website or the servers or networks connected to the website, or disobey any requirements, procedures, policies, or regulations of networks connected   
 to the website.
            </li>
          </ul>
        </li>

        <li>
          <h3>Products and Services</h3>
          <p>
            We attempt to be as accurate as possible in describing our products and services on the website. However, we do not warrant that product descriptions or other content of this website is accurate, complete, reliable, current, or error-free.   
 We reserve the right to modify or discontinue any product or service at any time without   
 notice.
          </p>
        </li>

        <li>
          <h3>Orders and Payments</h3>
          <ul>
            <li>All orders are subject to acceptance and availability.</li>
            <li>We reserve the right to refuse any order for any reason.</li>
            <li>Prices for our products are subject to change without notice.</li>
            <li>Payment for all orders must be made in full at the time of purchase.</li>
            <li>We accept payment by Credit Cards and Online Bank transfer.</li>
          </ul>
        </li>

        <li>
          <h3>Shipping and Delivery</h3>
          <ul>
            <li>We will ship your order to the address you provide at checkout.</li>
            <li>Shipping costs will be calculated and displayed at checkout.</li>
            <li>Delivery times may vary depending on your location and the shipping method you choose.</li>
            <li>We are not responsible for any delays or damages caused by the shipping carrier.</li>
          </ul>
        </li>

        <li>
          <h3>Returns and Refunds</h3>
          <p>
            We offer a 30 day return policy on all products. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.   
 To initiate a return, please contact our customer service team.   

          </p>
          <p>
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned   
 item. We will also notify you of the approval or rejection of your   
 refund. If your return is approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within   
 a certain amount of days.
          </p>
        </li>

        <li>   

          <h3>User Accounts</h3>
          <p>
            In order to access certain features of the website, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account   
 information, including your username and password. You agree to accept responsibility for all activities that occur under   
 your account.
          </p>
        </li>

        <li>
          <h3>Intellectual Property</h3>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of   
 our company or its content suppliers and is protected by United States and international copyright laws.   

          </p>
        </li>

        <li>
          <h3>Disclaimer of Warranties</h3>
          <p>
            This website and all products and services offered on this website are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Our website makes no representations or warranties of any kind, express or implied, as to the operation of this website or the information, content, materials, or products included on this   
 website.
          </p>   

        </li>

        <li>
          <h3>Limitation of Liability</h3>
          <p>
            In no event shall our company or its directors, officers, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with   
 the use of this website or the products or services offered on this website.
          </p>
        </li>

        <li>
          <h3>Indemnification</h3>
          <p>
            You agree to indemnify and hold our store and its affiliates, officers, agents, employees, and partners harmless from any claim or demand, including reasonable attorneys&apos;   
 fees, made by any third party due to or arising out of your use of the website, your violation of these Terms and Conditions, or your violation of any rights of another.   

          </p>
        </li>

        <li>
          <h3>Governing Law</h3>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of   
 Australia, without giving effect to any principles   
 of conflicts of law.
          </p>
        </li>

        <li>
          <h3>Dispute Resolution</h3>
          <p>
            Any dispute arising out of or relating to these Terms and Conditions or the use of the website shall be resolved through binding arbitration in accordance   
 with the rules of the American Arbitration Association.   

          </p>
        </li>

        <li>
          <h3>Changes to Terms and Conditions</h3>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the website   
 following the posting of any changes constitutes your acceptance of those changes.   

          </p>
        </li>

        <li>
          <h3>Severability</h3>
          <p>
            If any provision of these Terms and Conditions is held to be invalid or unenforceable, that provision shall be struck from these Terms and Conditions and the remaining provisions shall remain in full force and effect.   

          </p>
        </li>

        <li>
          <h3>Waiver</h3>
          <p>
            The failure of us to enforce any right or provision of these Terms and Conditions shall not constitute a waiver of such right or provision.
          </p>   

        </li>

        <li>
          <h3>Entire Agreement</h3>
          <p>
            These Terms and Conditions constitute the entire agreement between you and [Your Company Name] regarding the use of the website and supersede all prior or contemporaneous communications and proposals, whether oral or   
 written, between you and   
 our store. For more information you can contact us.
          </p>
        </li>
      </ol>
    </div>
  )
}

export default TermsPolicy
