import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TermsConditions = () => {
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
            TERMS & CONDITIONS
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
            <span>TERMS & CONDITIONS</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">TERMS OF USE</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Zimaxx Tech Solutions Private Limited, is a private limited company having its registered office at 2nd Floor 45, Chimbai Road, Off Hill Road, Bandra (West), Mumbai 400050 (COMPANY). “CAPTAIN INDIA” is an APP developed and owned by Zimaxx Tech Solutions Private Limited to provide 24×7 virtual personal safety to its users.
              </p>
              <p>
                The APP is designed to provide 24×7 virtual personal safety to its users through its various features, by connecting the User to emergency service providers such as ambulance service, road side assistance and other assistance from third parties. The APP shall also take best efforts to send real time alerts to law enforcement agencies with a view to seek timely support in the event of a crime.
              </p>
              <p>
                Please read the terms and conditions for use of the APP “CAPTAIN INDIA” (hereinafter referred to as the “APP”) and the services provided by access and/or use of the APP as mentioned below.
              </p>
              <p>
                By using the APP, You (User) agree to the terms and conditions listed herein including the modifications in respect of the same from time to time. This Agreement applies to all Users who access the APP whether for their own use or on behalf of any legal entity and for any purpose whatsoever. This Agreement hereby includes and incorporates the policies and guidelines mentioned below. The COMPANY reserves the right to modify the terms and conditions of this Agreement in the manner mentioned below. If the User do not agree to this Agreement (including any referenced policies or guidelines), he/she shall immediately terminate the use of the APP.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. General Terms</h3>
              <p>
                Upon duly filling up the online registration form, the APP will create an account for the User and an OTP will be sent to the User’s mobile number as per the details provided in the registration form for activation. Upon entering the OTP, the account will get activated. The COMPANY reserves the right to inspect the correctness of information if it deems necessary. Further, in case of suspicion in respect of any account, The COMPANY reserves the right to delay and/or deny the activation of the said suspicious account till such time its considers necessary.
              </p>
              <p>
                Your access to use the APP will be solely at the discretion of The COMPANY. The COMPANY reserves the right to modify the Terms of Use at any time without giving you any prior notice. User’s use of the APP following any such modification constitutes User’s agreement to follow and be bound by the Terms of Use as modified. Any additional terms and conditions, disclaimers, privacy policies and other policies applicable to general and specific areas of the Program is also considered as Terms of Use.
              </p>
              <p>
                The COMPANY reserves the right to add new functionality, remove existing functionality, and modify existing functionality to its APP as and when it deems fit, and make any such changes available in newer versions or all of these at its discretion. The User will be duly notified upon release of such newer versions and the COMPANY reserves the right to automatically upgrade User to the latest version of its APP or Software as and when it deems fit.
              </p>
              <p>
                The services of APP are subject to modification or may be removed by COMPANY, as a result of change in government regulations, policies and local laws as applicable.
              </p>
              <p>
                By using APP, User agrees that User has read and understood these Terms of Use and User agrees to be bound by these Terms of Use and use APP in compliance with these Terms of Use. PLEASE READ THESE TERMS OF USE CAREFULLY. IF USER DO NOT AGREE TO BE BOUND BY (OR CANNOT COMPLY WITH) ANY OF THE TERMS BELOW, DO NOT CLICK THE “I AGREE” BOX, DO NOT COMPLETE THE REGISTRATION PROCESS, AND DO NOT ATTEMPT TO USE THE SERVICES. User expressly represents and warrants that User will not use the APP if User do not understand, agree to become a party to, and abide by all of the terms and conditions specified below. Any violation of these Terms of Use may result in legal liability upon User. Nothing in these Terms of Use should be construed to confer any rights to any third party or any other person. USER USE OF THE APP MEANS USER IS CONSENTING TO THIS AGREEMENT.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Minimum age requirement to use APP</h4>
              <p>
                The minimum age to use APP is 18+ years. If any User is below 18 years of age, do not download and use the APP. The person under the age of 18 years who wishes to use the APP may ask parent or guardian to download and use the APP.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mt-8 mb-4">User’s Obligations:</h4>
              <p>You (User) undertakes to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide true, accurate, correct and complete information which User is required to provide when User registers or use the APP</li>
                <li>Notify COMPANY/APP immediately of any changes to the Personal Information provided by User</li>
                <li>User agrees not to impersonate any other person or entity or to use a false name or a name that User is not authorised to use</li>
                <li>maintain the confidentiality of passwords associated with any log­in User use to access the APP.</li>
              </ul>
              <p>User undertakes not to</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>use any engine, software, tool, agent or other device or mechanism (such as spiders, robots, avatars or intelligent agents) to navigate or search the APP</li>
                <li>circumvent or disable any security features of the APP</li>
                <li>allow unauthorized access</li>
                <li>use the APP for any unauthorized and unlawful purpose</li>
                <li>access (or attempt to access) the APP by any means other than through the interface that is provided by the APP.</li>
                <li>engage in any activity that interferes with or disrupts the APP or services</li>
              </ul>
              <p>
                The Company dos not independently verifies or authenticates the information provided by the User and it is the sole responsibility of the user to provide accurate information to be able to avail of third party services being provided through the APP. The Company shall not be liable in any manner whatsoever if the services are denied to any User due to inaccuracies or incompleteness in the information provided by the User.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Exclusive Non-Transferrable Rights To Use CAPTAIN INDIA / APP</h3>
              <p>
                The COMPANY grants a non-exclusive, non-transferrable, revocable license to User to use the APP subject to the terms and conditions embodied herein. APP is available to User exclusively and User may not transfer, assign, sell or in any manner whatsoever alienate the rights available to User to use this APP to any other person. If User breaches this restriction, COMPANY may terminate this agreement and User also may be subject to prosecution and damages.
              </p>

              {/* ... All other sections will be added exactly as provided ... */}
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Title and Ownership</h3>
              <p>The COMPANY retains all rights, title, and interest in the APP, information, text, graphics, images, logos, icons, software / source code, design, and the collection, arrangement and assembly of content and its documentation and in all related copyrights, trade secrets, patents, trademarks, and any other intellectual and proprietary rights, including registrations, applications, renewals, and extensions of such rights. User may not remove any titles, trademarks or trade names, copyright notices, legends, or other proprietary markings in APP and its documentation. User is not granted any rights to any trademarks or service marks of COMPANY. COMPANY retains all rights not expressly granted to User in these terms. User shall not modify the APP Content or reproduce, display, publicly perform, distribute, or otherwise use APP or the Content in any way for any public or commercial purpose or for personal gain.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Permission To Receive Information</h3>
              <p>User hereby agrees to receive information in the electronic as well as paper based form or through a representative which includes but is not limited to phone calls, SMS, emails or information is any other form from APP which is related to usage of the APP, or any other information that APP finds it fit and relevant for use by User.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">No Warranty</h3>
              <p>User expressly acknowledges and agrees that use of APP is at User’s sole risk and that the entire risk as to satisfactory quality, performance, accuracy and effort is with User. To the maximum extent permitted by applicable law, APP and any services performed or provided by APP are provided “as is” and “as available”, without warranty of any kind, and COMPANY hereby disclaims all warranties and conditions with respect to any services, either express, implied or statutory, including, but not limited to, the implied warranties and/or conditions of merchantability, of satisfactory quality, of fitness for a particular purpose, of accuracy, of quiet enjoyment, and non-infringement of third party rights. APP does not warrant against interference with User’s enjoyment of APP and the functions contained in, or services performed or provided by APP will meet User’s requirements, that the operation of APP or services will be uninterrupted or error-free, or that defects in APP or services will be corrected. No oral or written information or advice given by COMPANY or its authorized representative shall create a warranty.</p>
              <p>Though COMPANY constantly strives to give accurate, reliable and current information on the APP, COMPANY does not warrant the correctness and accuracy of the information provided on, collected from or used from third party APPs or third party services.</p>
              <p>COMPANY makes no express representation or warranty as to whether information transmitted from or to the APP will be intercepted by or otherwise be received by an unauthorized third party.</p>
              <p>COMPANY does not warrant the uninterrupted and continuous provision and running of the APP and the same may be suspended or interrupted due to reasons beyond its control.</p>
              <p>COMPANY does not warrant the timeliness or quality of service provided by the third party service providers associated with the APP</p>
              <p>Under no circumstances shall COMPANY be held liable for delay or failure or disruption of the APP or any of the services delivered through the APP resulting directly or indirectly from acts of nature, causes beyond its reasonable control, including internet failures, computer, telecommunications or any other equipment failures, electrical power failures, etc.</p>
              <p>The COMPANY does not represent that the services it offers under the APP may not be compromised or circumvented, and that the services will prevent any personal injury or property loss or otherwise; or that the services in all cases provide adequate warning or protection. User understands that the services provided under the APP may only reduce the risk; which may occur without such services, and that they are not insurance or a guarantee that such events will not occur or that there will be no personal injury or property loss as a result.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Limitation Of Liability</h3>
              <p>To the extent not prohibited by law, in no event shall COMPANY, its affiliates, officers, directors, employees, consultants, licensors, agents, and representatives be liable for personal injury, loss or damages or any incidental, special, indirect or consequential damages whatsoever , including, without limitation, damages for loss of profits, loss of data, business interruption, cost of cover, substitute goods, out of pocket costs or any other commercial or professional damages or losses, arising out of or related to User’s use or inability to use APP, however caused, regardless of the theory of liability (contract, tort or otherwise) and even if COMPANY, its affiliates, officers, directors, employees, consultants, licensors, agents, and representatives has been advised of the possibility of such damages.</p>
              <p>In no event shall COMPANY, its affiliates, officers, directors, employees, consultants, licensors, agents, and representatives be liable for any direct or indirect loss or damages in connection with any content posted, transmitted, exchanged or received by User through the APP.</p>
              <p>Further, in no event shall the total aggregate liability of COMPANY, its affiliates, representative or agents to User for all damages, losses, and causes of action (whether in contract or tort, including, but not limited to, negligence or otherwise) arising from the terms and conditions or User’s use of the APP exceed Rs. 1000/- (Rupees One Thousand Only).</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Indemnity</h3>
              <p>User agrees to indemnify and hold harmless COMPANY, its affiliates, officers, directors, employees, consultants, licensors, agents, and representatives from any and all third party vendors, from claims, losses, liability, damages, and/or costs (including reasonable attorney fees and costs) arising from his/her/ its access to or use of APP. COMAPNY will notify you promptly of any such claim, loss, liability, or demand, and in addition to User’s foregoing obligations, User agrees to provide COMPANY with reasonable assistance, at User’s expense, in defending any such claim, loss, liability, damage, or cost.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Intermediary Guidelines / Covenants</h3>
              <p>As mandated by Regulation 3(2) of the IG Rules, COMPANY hereby informs User that User is not permitted to host, display, upload, modify, publish, transmit, update or share any information that:</p>
              <ol className="pl-6 space-y-2" style={{ listStyleType: 'lower-alpha' }}>
                <li>belongs to another person and to which User does not have any right to;</li>
                <li>is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, pedophilic, libelous, invasive of another’s privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;</li>
                <li>harm minors in any way;</li>
                <li>infringes any patent, trademark, copyright or other proprietary rights;</li>
                <li>violates any law for the time being in force;</li>
                <li>deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</li>
                <li>impersonate another person;</li>
                <li>contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;</li>
                <li>threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation.</li>
              </ol>
              <p>COMPANY, upon obtaining knowledge shall be entitled to disable such information that is in contravention of this Clause.</p>

              {/* ... And the rest of the content ... */}
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Foreign Nationals</h3>
              <p>All Users of the APP in countries other than India should verify whether they are violating any of the local laws in such countries by using this APP and availing the Services provided hereunder. If the User chooses to access the APP from outside India, he/she/it shall be responsible for compliance with both the foreign and local laws. The User agrees that he/she/it will solely be liable for any liability incurred by them in this regard and will indemnify COMPANY for any liability that it may incur in any foreign jurisdiction as a consequence of citizens/residents of countries other than India using the APP.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Termination</h3>
              <p>These Terms & Conditions shall commence and be in force from the day and time User agrees to them (“Effective Date”) and will remain in full force unless terminated by either of the Party or any set date and time towards its remaining effective. In case of pending activity / participation, the terms and condition shall remain in force till the completion / delivery of the same, within the pre-decided day and with the specified standards.</p>
              <p>Notwithstanding the above terms, COMPANY shall have the exclusive power to terminate this Agreement upon intimation. COMPANY reserves the right to terminate User’s access to the APP for cause as hereinbelow:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>User commits a breach of any terms and conditions of this agreement / terms of use or the Data Protection and Privacy Policy;</li>
                <li>COMPANY is unable to verify or authenticate any information provided by User to COMPANY; or</li>
                <li>COMPANY believes in its sole discretion that User’s actions may cause legal liability for COMPANY or are contrary to the interests of the APP.</li>
                <li>In case of non­compliance with any applicable laws, rules or regulations, or the Agreement (including the privacy policy) by User</li>
              </ul>
              <p>User may terminate this Agreement with or without cause with written notice to COMPANY.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Suspension</h3>
              <p>The Company may in its sole discretion suspend your access and usage to the APP and Services if</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You commit a breach of any terms and conditions of this agreement / terms of use or the Privacy Policy;</li>
                <li>If You abuse or misuse the APP and /or Services. Misuse includes creating multiple or false profiles, infringing any intellectual property rights, posting abusive content , violating any of the terms and conditions of this Agreement, or any other behavior that the Company, in its sole discretion, deems contrary to its purpose.</li>
                <li>The Company is unable to verify or authenticate any information provided by You to the Company ; or</li>
                <li>The Company believes in its sole discretion that your actions may cause legal liability for the Company or are contrary to the interests of the Company.</li>
                <li>In case of non­compliance with any applicable laws, rules or regulations, or the Agreement (including the privacy policy) by You.</li>
                <li>with thirty (30) days written notice to you to enable you to remedy the breach or non-compliance. If you fail to remedy the breach in the notice period to the satisfaction of the Company the agreement shall stand terminated.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Consequences of Termination or Suspension :</h3>
              <p>Once suspended or terminated, User may not continue to use APP, or re­-register under the same or new identity unless explicitly permitted by the COMPANY. On termination of an account due to the reasons of breach mentioned herein, User shall no longer have access to any data and other content residing with COMPANY/APP.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Misuse of APP</h3>
              <p>COMPANY may restrict, suspend or terminate the account of any User who abuses or misuses APP. Misuse includes creating multiple or false profiles, infringing any intellectual property rights, violating any of the terms and conditions of these Terms of Use, or any other behavior that COMPANY, in its sole discretion, deems contrary to its purpose.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Delay</h3>
              <p>Any delay in the performance of any duties or obligations from COMPANY/APP will not be considered a breach of this Agreement.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Amendments</h3>
              <p>COMPANY reserves the right to change the terms at any time. Further, COMPANY will endeavour to notify you of any change by either a notice, email or some other means, but our failure to do so will not limit the enforceability of any change. Use of APP constitutes acceptance of the most recent version of the Agreement.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Assignment</h3>
              <p>COMPANY may assign this Agreement, in whole or in part, in its sole discretion. User shall not assign User’s rights under this Agreement. User agrees to comply with all applicable legal requirements, under any applicable law and guidance set forth therein.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Entire Understanding</h3>
              <p>This Agreement constitutes the entire understanding between COMPANY and USER in respect to the subject matter of this Agreement and supersedes all prior communications, understandings, and agreements, written or oral. User’s failure to enforce at any time any of the provisions hereof shall not be a waiver of such provision, or any other provision, or of the right of such party thereafter to enforce any provision hereof. If any provision specified in this Agreement shall be invalid under any applicable law, the invalid provision, or portion thereof, shall be struck and the remainder, if any, shall be deemed enforceable to the extent permitted under the applicable law, and the remaining provisions of this Agreement shall be given effect in accordance with their terms.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Governing Law and Dispute Resolution</h3>
              <p>Terms and conditions of the User Agreement shall be governed by Indian Law and are subject to the jurisdiction only of the Courts of Mumbai, Maharashtra, India. The Parties to this Agreement hereby submit to the exclusive jurisdiction of the Courts of Mumbai, Maharashtra, India.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default TermsConditions