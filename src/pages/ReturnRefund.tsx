import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ReturnRefund = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Return & Refund Policy
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center space-x-2 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to="/" className="text-red-600 hover:text-red-700 transition-colors">
              Home
            </Link>
            <span>&gt;&gt;</span>
            <span>Return & Refund Policy</span>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 underline">RETURN, REPLACEMENT, EXCHANGE AND REFUND POLICY</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 underline">Return, Replacement, and Exchange:</h3>
              
              <p>
                Zimaxx's return, replacement and exchange policy gives User an option to return or replace or exchange product(s) purchased online/e-commerce portal for any reason within the specified return/exchange period. Feel free to try on the product(s)/service(s) to check if it suits User needs, but just make sure that it remains unused/unconsumed and is preserved in its original condition along with the tags and packaging. In case a seal tag is received with the product(s), ensure that it remains attached and intact with the product(s) to avoid any hassles in the event of a return/replacement/exchange.
              </p>

              <p>
                <strong>Request for return or replacement or exchange must be raised within 7 (seven) days from the date of delivery.</strong>
              </p>

              <p>
                Return of the product(s) shall be arranged by the User using a reputed courier in User's respective area to the following address:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-6">
                <p><strong>Zimaxx Tech Solutions Private Limited</strong></p>
                <p><strong>45, Zicom House, Chimbai Road,</strong></p>
                <p><strong>Behind St. Andrews Road, Off Hill Road,</strong></p>
                <p><strong>Bandra West, Mumbai 400050.</strong></p>
              </div>

              <p>
                The freight charges of such product(s) shall be reimbursed to the User on successful receipt of the product(s) and verification of the same.
              </p>

              <p className="font-semibold">
                Return or replacement or exchange are subject to verification and checks in order to determine the legitimacy of the complaint/return.
              </p>

              <p>
                If User chooses to exchange the product(s) for reason of mismatch of size or receipt of a defective product(s), User will be provided with a replacement of the product(s) free of cost. However, all exchanges are subject to stock availability, product(s)/service(s) remains unused/unconsumed and User address being serviceable for an exchange. If the product(s) does not pass the verification and checks, the product(s) shall be shipped back to User, for which User shall have to bear the expense.
              </p>

              <p>
                Zimaxx will not be liable for the product(s) returned by mistake. In circumstances where an extra or a different product(s) is returned by mistake, Zimaxx would not be accountable for misplacement or replacement of the product(s) and is not responsible for its delivery back to the User.
              </p>

              <p>
                User's returned product(s) shall be checked for the following conditions:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">For</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Correctness</td>
                      <td className="border border-gray-300 px-4 py-2">Name/Image/Brand/Serial number/Bar Code/QR Code should match and MRP tag should not be removed and clearly visible.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Completeness</td>
                      <td className="border border-gray-300 px-4 py-2">All in-the-box accessories (including but not limited to user manuals, stickers, QR codes, license key cardholder, PVC Card, etc.), freebies, warranty/guarantee cards (if any) should be present.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Non-Usage</td>
                      <td className="border border-gray-300 px-4 py-2">The product(s)/service(s) should be unused, unsealed, unconsumed, non-tampered with seals.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Non-damage (Product)</td>
                      <td className="border border-gray-300 px-4 py-2">The product(s) should be undamaged.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Non-damage (Packaging)</td>
                      <td className="border border-gray-300 px-4 py-2">Product(s) original packaging/box should be undamaged.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Product(s) may be rejected for return or replacement or exchange, if they are not returned as per the conditions mentioned above.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 underline">Product(s) return or replacement or exchange will be acceptable on the following conditions:</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>The product(s) received are damaged lacking or defective.</li>
                <li>The damaged product(s) pictures were sent to Zimaxx and are meeting the required criteria of proof.</li>
                <li>Wrong product(s) is/are delivered to User by Zimaxx.</li>
                <li>Billing quantity of product(s) is/are delivered by Zimaxx.</li>
                <li>Product(s)/Service(s) is/are undelivered/missing with manufacturing defects.</li>
                <li>Product(s) is/are not in original condition.</li>
                <li>Service is subject to availability of technician(s) and is limited to one request.</li>
                <li>Product(s) with passwords / locks should be returned disabled / unlocked.</li>
                <li>Product(s) that store personal information should be returned after deletion of personal information. Zimaxx shall not be responsible in any manner for any data breach whatsoever.</li>
                <li>Product(s) sold as combos / sets cannot be returned or replaced or exchanged individually.</li>
                <li>Product(s) should be carefully packed so that there is no damage during the transit.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 underline">User must notify us of a return/replacement/exchange:</h3>
              
              <p>
                User can call us on our toll-free number 1800 210 4567 and follow the process as guided by our executive. Alternatively User are requested to write to us on email support@zimaxtech.com mentioning therein details including but not limited to credentials, invoice number, order number, images of the defective product(s), etc. User must use the services of a reputed courier for returns and both the tracking and docket numbers must be shared with us.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 underline">Refund Eligibility:</h3>
              
              <p>
                No refunds or exchange or replacement will be initiated under the following conditions:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Product(s) received in damaged and tampered conditions from the User.</li>
                <li>Incorrect shipping address is provided by the User while placing an order.</li>
                <li>Part/whole of the product(s)/service(s) is/are consumed and User has decided to return it.</li>
                <li>If third party uses User's log-in credentials to sign-in and place an order.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 underline">Mode of Payment for Refund:</h3>
              
              <p>
                Zimaxx will initiate refund through the following modes:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Payment Mode</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Refund Mode Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Credit Card/Debit Card/Prepaid Payment Instrument viz. Wallets</td>
                      <td className="border border-gray-300 px-4 py-2">Credit Card/Debit Card/Prepaid Payment Instrument viz. Wallets</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">IMPS/Bank Account through net banking</td>
                      <td className="border border-gray-300 px-4 py-2">IMPS/Bank Account through net banking</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">UPI</td>
                      <td className="border border-gray-300 px-4 py-2">UPI</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Cash on Delivery</td>
                      <td className="border border-gray-300 px-4 py-2">NEFT to designated Bank account</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Gift Card/Gift Voucher</td>
                      <td className="border border-gray-300 px-4 py-2">Gift Card/Gift Voucher</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ul className="list-disc pl-6 space-y-2">
                <li>Zimaxx may request for information/documents to verify User credentials before initiating refund.</li>
                <li>If the payment mode has expired or is no longer valid, Zimaxx will refund through one of the modes mentioned above as agreed by the User.</li>
                <li>Zimaxx shall refund shall be made in Indian Rupees only.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4 underline">Repeated Return Requests:</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Zimaxx reserves the right to make the product(s) ineligible for return or replacement or refund, if Zimaxx observes transactional history or repeated returns.</li>
                <li>The liability and risk of such returns shall be on the User to establish claim for return. Refund for returned product(s) or replacement shall only be initiated if the product(s) received fails to pass through the verification and checks, the product(s) shall be shipped back to the User, for which User shall have to bear the expense.</li>
              </ul>

              <p className="text-sm text-gray-500 mt-8">
                <strong>Last updated:</strong> December 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ReturnRefund