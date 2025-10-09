
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
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
            PRIVACY POLICY
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
            <span>PRIVACY POLICY</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">CAPTAIN INDIA PRIVACY POLICY</h2>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p className="text-lg">
               Zimaxx Tech Solutions Private Limited (COMPANY) respects the privacy of User and is committed to take reasonable precautions to protect information consisting of Personal Information(PI) and Sensitive Personal Information (SPI) of Users of CAPTAIN INDIA and comply with all legal, regulatory and / or contractual obligations related to privacy.
              </p>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">PURPOSE :</h3>
                <p>
                  This Privacy Policy is published in compliance of provisions of the Information Technology Act 2000 and Rules notified thereunder for collection, use, disclosure and retention of Personal and Sensitive Personal Information.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">SCOPE :</h3>
                <p className="mb-4">The Privacy Policy sets out:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The type of information collected from USERS/YOU.</li>
                  <li>The purpose, means and modes of usage of such information.</li>
                  <li>How and to whom COMPANY may disclose such information.</li>
                  <li>How will the information be retained by COMPANY.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">APPLICABILITY :</h3>
                <p className="mb-4">
                  The Policy is applicable and binding on all USERS who may hereinafter be referred to as "You".
                </p>
                <p className="mb-4">
                  You are expected to read and understand the Privacy Policy, so that You have the knowledge of :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The fact that the information is being collected.</li>
                  <li>The purpose for which the information is being collected.</li>
                  <li>The name and address of the entity that is collecting the information and the entity that will retain the information.</li>
                  <li>The intended recipients of the information;</li>
                  <li>The various rights available to such Users in respect of such information.</li>
                </ul>
                <p className="mt-4">
                  You may choose not to provide the personal and sensitive personal information being collected from you , however that will affect your ability to use the CAPTAIN INDIA Services and all the Services may not be available to You. The Company also reserves the right of not providing the CAPTAIN INDIA Services to you in the event you choose not to provide the personal and sensitive personal information being requested from you.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">1. DEFINITIONS OF PERSONAL INFORMATION AND SENSITIVE PERSONAL INFORMATION AS DEFINED IN Information Technology ACT 2000 AND RULES</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h4>
                  <p>
                    is defined to mean any information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available with the COMPANY, is capable of identifying such person.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Sensitive Personal Data or Information</h4>
                  <p>
                    of a person means such personal information as defined under Section 43A of the Information Technology ACT 2000 read with Rule 3 of the Information Technology(Reasonable Security Practices and Procedures and sensitive personal data or Information ) Rules, 2011
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Collection of Personal Information</h4>
                  <p className="mb-4">The COMPANY collects the following Personal information from you directly or indirectly:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name</li>
                    <li>Date of Birth</li>
                    <li>Gender</li>
                    <li>Mobile Number</li>
                    <li>Email Address</li>
                    <li>Emergency Contact details- name and phone number</li>
                    <li>Insurance Policy details including but not limited to accident, health, etc.</li>
                    <li>Information, photos, Video or Audio captured from mobile device</li>
                    <li>Current Location</li>  
                    <li>Government Identity Proof Image and Number</li>
                    <li>Any other information necessary to provide service</li>
                    
                  </ul>
                  <p className="mt-4">
                    The COMPANY may also collect or gather information about You indirectly in the background including but not limited to IP Address, Device details,etc _________ .
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Collection of Sensitive Personal Information</h4>
                  <p className="mb-4">The COMPANY collects the following Sensitive personal information from You:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Blood Group</li>
                    <li>Health information</li>
                    <li>Information, photos, Video or Audio captured from your mobile device</li>
                  </ul>
                  <p className="mt-4 font-semibold text-red-600 bg-red-50 p-4 rounded-lg">
                    YOU UNDERSTAND AND AGREE THAT THE VIDEO OR AUDIO CAPTURED BY THE APP MAY CONTAIN SEXUALLY SENSITIVE INFORMATION.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">1. USE OF INFORMATION BY THE COMPANY ( PURPOSE)</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Use of Personal Information</h4>
                  <p className="mb-4">The COMPANY uses personal information collected from you for the purposes of :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Registration</li>
                    <li>Provide CAPTAIN INDIA SERVICES</li>
                    <li>to comply with applicable laws</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Use of sensitive personal information</h4>
                  <p className="mb-4">The COMPANY uses sensitive personal information collected from you for the purposes of :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide CAPTAIN INDIA SERVICES</li>
                    <li>to comply with applicable laws</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">DISCLOSURE OF PERSONAL INFORMATION</h3>
                <p className="mb-4">
                  The COMPANY shall disclose the personal information collected from you to any third party only for the purpose of providing the following services such as –
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Road Side Assistance</li>
                  <li>Ambulance Service</li>
                  <li>Accidental Insurance coverage</li>
                  <li>Counselling services</li>
                  <li>Any other services introduced from time to time</li>
                </ul>
                <p className="mt-4">
                  and shall protect your personal information with appropriate security measures and prohibit any unauthorized disclosures.
                </p>

                <div className="mt-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">DISCLOSURES OF SENSITIVE PERSONAL INFORMATION</h4>
                  <p className="mb-4">
                    CAPTAIN INDIA/COMPANY shall disclose the personal information collected from you to any third party only for the purpose of providing the following services such as –
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Road Side Assistance</li>
                    <li>Ambulance Service</li>
                    <li>Accidental Insurance coverage</li>
                    <li>Counselling services</li>
                    <li>Any other services introduced from time to time</li>
                  </ul>
                  <p className="mt-4">
                  The COMPANY does not have any control over the protection offered and security measures implemented by the third party services providers to whom your personal information or sensitive personal information will be disclosed to enable to avail of the CAPTAIN INDIA services .However the Company shall advise and communicate in writing to the third party service providers not to use your personal information or sensitive personal information for their own purposes or not to  disclosing your personal information or sensitive personal information  to others. 
                  </p>

                  <p className="mt-4">
                  The COMPANY reserves the right to disclose any personal information in the COMPANY’S custody if the COMPANY is compelled to do so by a court of law or requested to do so by a governmental entity or if the COMPANY determines it is necessary or desirable to comply with the law and more particularly Section 19 of the Protection of Children from Sexual Offences Act, 2012 or to protect or defend the COMPANY’s rights or property. The COMPANY also reserves the right to retain information collected and to process such information to comply with any statutory obligations.
                  </p>

                </div>

                <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">NOTIFICATION AND CONSENT</h3>
                <p>
                 IT Act 2000 requires your express consent for collection, use or disclosure of your sensitive personal information. By accepting this policy electronically on  CAPTAIN INDIA, you have given your express consent to the terms and conditions embodied herein.
                </p>
                 <p>
                  IT Act 2000 does not require to obtain your consent for the collection, use or disclosure of personal information.  By accepting to use the APP, the COMPANY assumes, unless you advise the COMPANY otherwise, that you have consented to the COMPANY collecting, using and disclosing your personal information for the purposes stated above (including any other purposes stated or reasonably implied at the time such personal information was provided to us)
                </p>
                
                <p>
                 You may, at any time, subject to legal or contractual restrictions and reasonable notice, withdraw your consent.  All communications with respect to such withdrawal or variation of consent should be in writing and addressed to  privacy@zimaxxtech.com
                </p>
                <p>
                  Please note that withdrawal of consent may affect the use of CAPTAIN INDIA services. You may not be able to avail of certain services of CAPTAIN INDIA if you do not consent to the Privacy Policy or opt out for collection of certain information. The Company also reserves the right of not providing the CAPTAIN INDIA Services to you in the event you choose to withdraw your consent.
                </p>

                </div>

                <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">CHANGES TO THE POLICY</h3>
                <p>
                 This  Policy may change from time to time. To assist you, this Policy is dated and has an associated version number.
                </p>
                </div>
                 
                 <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">REQUEST FOR ACCESS TO PERSONAL INFORMATION / QUESTIONS OR COMPLAINTS</h3>
                <p>
                 If you have any questions about this Policy, or any concerns or complaints with regard to the administration of the Policy, or if you want to know more about the personal or sensitive information that the COMPANY maintains about you, you may write to or submit a request in writing for access to privacy@zimaxxtech.com .
                </p>
                </div>

                <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">RETENTION</h3>
                <p>
                  The information submitted by the You shall be held for 5 Years or as required by law from the date of discontinuation of services.
                </p>
                </div>

                <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">REASONABLE SECURITY PRACTICES</h3>
                <p className="mb-4">
                  The COMPANY maintains reasonable security practices and procedures to protect the Personal and Sensitive Personal Information provided by you which includes managerial, technical, operational and physical security control measures that are commensurate with the data being protected. Further, all the data collected from you is transmitted across a secure connection and the data residing on the server is encrypted.
                </p>
                <p>
                  The COMPANY shall not liable for any loss of any personal or sensitive personal information provided by you, due to reasons or causes or conditions beyond its control including but not limited to corruption of data, strike, riots, civil unrest, Govt. policies, unauthorised access, tampering of data by unauthorized persons, war and natural calamities.
                </p>
              </div>

              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">GRIEVANCE OFFICER</h3>
                <p className="mb-4">
                  To address any discrepancies and grievances that You may have with respect to processing of information, the Company has designated a grievance officer whose details are as below –
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p><strong>Name:</strong> Kunjan</p>
                  <p><strong>Email address:</strong> legal@zimaxxtech.com</p>
                </div>
              </div>

              </div>

              

              

              


              

             
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default PrivacyPolicy
