'use client';

// pages/privacy-policy.js
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
      <Head>
        <title>Privacy Policy | My Company</title>
        <meta name="description" content="Privacy Policy of My Company" />
      </Head>
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg mb-4">
          At StackViv AI, accessible from <Link href="/ai-categories" className="text-blue-600 underline">stackviv.ai</Link>, we prioritize the privacy of our visitors.
          This Privacy Policy outlines the types of information collected and recorded by StackViv AI and how we utilize it.
        </p>

        <p className="text-lg mb-4">
          For any additional inquiries or clarifications regarding our Privacy Policy, please don’t hesitate to reach out to us.
        </p>

        <p className="text-lg mb-4">
          This Privacy Policy pertains solely to our online activities and applies to visitors of our website concerning the information shared and/or collected on StackViv AI. It does not extend to information collected offline or through channels other than this website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Consent</h2>
        <p className="text-lg mb-4">
          By using our website, you hereby agree to our Privacy Policy and consent to its terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="text-lg mb-4">
          We will clearly communicate the reasons for requesting personal information at the point of collection. This may include:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Contact details (e.g., name, email address, phone number) if you reach out to us directly</li>
          <li>Account registration information (e.g., name, company name, address, email address, telephone number)</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-lg mb-4">We utilize the collected information for various purposes, including:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Website operation and maintenance</li>
          <li>Enhancement and personalization of user experience</li>
          <li>Analysis of website usage patterns</li>
          <li>Development of new features and functionalities</li>
          <li>Direct or partner-mediated communication for customer service, updates, and marketing</li>
          <li>Email correspondence</li>
          <li>Fraud detection and prevention</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Log Files</h2>
        <p className="text-lg mb-4">
          StackViv AI employs standard log file procedures. These files record visitor activity on the website, including IP addresses, browser types, Internet Service Providers (ISPs), date and time stamps, referring/exit pages, and click counts. This non-personally identifiable information is used for trend analysis, website administration, user movement tracking, and demographic data collection.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Web Beacons</h2>
        <p className="text-lg mb-4">
          Like most websites, StackViv AI uses “cookies” to store information about visitor preferences and browsing history. This helps us optimize user experience by customizing our web content based on browser types and other information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Advertising Partners</h2>
        <p className="text-lg mb-4">
          Our advertising partners may use technologies such as cookies, JavaScript, or Web Beacons in their advertisements. StackViv AI has no access to or control over these third-party cookies. Please consult the respective Privacy Policies of these third-party ad servers for more detailed information and opt-out instructions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Privacy Policies</h2>
        <p className="text-lg mb-4">
          StackViv AI’s Privacy Policy does not apply to other advertisers or websites. We recommend reviewing the respective Privacy Policies of any third-party ad servers for more comprehensive information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p className="text-lg mb-4">
          Under the CCPA, California consumers have the right to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Request disclosure of personal data collected by a business</li>
          <li>Request deletion of personal data</li>
          <li>Opt-out of the sale of personal data</li>
        </ul>
        <p className="text-lg mb-4">
          We will respond to requests within one month. To exercise these rights, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">GDPR Data Protection Rights</h2>
        <p className="text-lg mb-4">
          Under GDPR, users are entitled to the following data protection rights:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Right to access</li>
          <li>Right to rectification</li>
          <li>Right to erasure</li>
          <li>Right to restrict processing</li>
          <li>Right to object to processing</li>
          <li>Right to data portability</li>
        </ul>
        <p className="text-lg mb-4">
          Requests will be addressed within one month. To exercise these rights, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Children’s Information</h2>
        <p className="text-lg mb-4">
          We prioritize the protection of children using the internet. StackViv AI does not knowingly collect Personal Identifiable Information from children under 13. If you believe your child has provided such information on our website, please contact us immediately, and we will promptly remove it from our records.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-lg mb-4">
          We may update our Privacy Policy periodically. We advise reviewing this page regularly for any changes. Changes are effective immediately upon posting on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-lg">
          If you have any questions or suggestions about our Privacy Policy, please don’t hesitate to contact us at{' '}
          <Link href="/contact" className="text-blue-600 underline">hello@stackviv.ai</Link>. This Privacy Policy was last updated on August 12, 2024.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
