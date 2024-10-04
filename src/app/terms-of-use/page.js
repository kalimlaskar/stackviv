'use client';

// pages/terms-of-use.js
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfUse = () => {
  return (

    <>

<Header />
      <Head>
        <title>Terms of Use | StackViv AI</title>
        <meta name="description" content="Terms of Use for StackViv AI" />
      </Head>
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
        <p className="text-lg mb-4">Last Updated: August 12, 2024</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction and Acceptance</h2>
        <p className="text-lg mb-4">
          Welcome to <Link href="/ai-categories" className="text-blue-600 underline">StackViv AI</Link> (“StackViv AI” or the “Site”), your comprehensive directory for artificial intelligence tools and resources. By accessing or using StackViv AI, you agree to comply with and be bound by these Terms of Use (“Terms”). If you disagree with any part of these Terms, please refrain from using our Site.
        </p>
        <p className="text-lg mb-4">
          StackViv AI is operated by Signlops Technologies Pvt Ltd, dedicated to empowering individuals and organizations by facilitating access to AI technologies through a user-friendly, informative platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility and Registration</h2>
        <p className="text-lg mb-4">
          StackViv AI is intended for use by individuals who are at least 18 years old, as well as companies and organizations. By using the Site, you confirm that you meet these eligibility requirements. If you choose to register on StackViv AI, you agree to provide accurate, current, and complete information and to keep this information updated.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Conduct and Responsibilities</h2>
        <p className="text-lg mb-4">
          As a user of StackViv AI, you are responsible for your actions on the platform and must adhere to all applicable laws and regulations. You agree not to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Use StackViv AI for any unlawful purpose or in a way that disrupts or impairs the Site’s functionality</li>
          <li>Attempt unauthorized access to the Site or its connected systems</li>
          <li>Transmit spam, malware, or any harmful computer code</li>
          <li>Infringe upon intellectual property rights</li>
          <li>Engage in or promote adult services, illegal activities, or discriminatory content</li>
          <li>Manipulate engagement metrics or post misleading content</li>
          <li>Submit low-quality or irrelevant content</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property Rights</h2>
        <p className="text-lg mb-4">
          The content on StackViv AI, including text, graphics, logos, and software, is the property of Signlops Technologies Pvt Ltd. or its content providers. Users are granted a limited, non-exclusive license to access and use the Site for personal, non-commercial purposes only.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. AI Tool Listings Quality Standards</h2>
        <p className="text-lg mb-4">
          To maintain the integrity of our platform, AI tool listings must:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Demonstrate significant and obvious use of AI technologies</li>
          <li>Provide accurate and honest descriptions of functionalities</li>
          <li>Offer responsive customer support (within 48 hours)</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Be free from malicious content or intent</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Financial Terms and Refund Policy</h2>
        <p className="text-lg mb-4">
          Fees for services on StackViv AI are quoted in U.S. Dollars unless otherwise specified. Users are responsible for all charges incurred and applicable taxes. Refunds are provided only in specific circumstances, such as if a tool is not approved for listing. We do not offer refunds for published listings or unused ad campaigns.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. User Content and License</h2>
        <p className="text-lg mb-4">
          By submitting content to StackViv AI, you grant us a worldwide, irrevocable, non-exclusive, royalty-free license to use, modify, and distribute your content on our platform. You are responsible for ensuring you have the necessary rights to grant this license.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Third-Party Links and Services</h2>
        <p className="text-lg mb-4">
          StackViv AI may contain links to third-party websites or services. We do not endorse or assume responsibility for any third-party content, products, or services. Your use of such third-party offerings is at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Account Termination and Suspension</h2>
        <p className="text-lg mb-4">
          StackViv AI reserves the right to terminate or suspend user accounts without prior notice for violations of these Terms or for any other reason deemed necessary.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Disclaimers and Limitations of Liability</h2>
        <p className="text-lg mb-4">
          StackViv AI is provided “as is” without any warranties. We are not liable for any damages resulting from your use of the Site or inability to access our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Indemnification</h2>
        <p className="text-lg mb-4">
          You agree to indemnify and hold harmless Signlops Technologies Pvt Ltd, its affiliates, and employees from any claims arising out of your use of the Site or violation of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Changes to Terms of Use</h2>
        <p className="text-lg mb-4">
          We may modify these Terms at our discretion. Significant changes will be communicated with at least 30 days’ notice. Continued use of the Site after changes constitutes acceptance of the new Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">13. Governing Law and Dispute Resolution</h2>
        <p className="text-lg mb-4">
          These Terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through binding arbitration in accordance with the rules of [Relevant Arbitration Association].
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">14. Miscellaneous Provisions</h2>
        <h3 className="text-xl font-semibold mt-6 mb-4">Severability</h3>
        <p className="text-lg mb-4">
          Should any part of these Terms be deemed unenforceable or invalid by a court of law, that specific provision will be modified or removed to the minimum extent necessary. The remaining provisions will continue to be fully effective and enforceable.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-4">Complete Agreement</h3>
        <p className="text-lg mb-4">
          These Terms represent the entire agreement between you and StackViv AI concerning your use of our platform. They supersede any previous agreements or understandings, including earlier versions of these Terms. No other representations or promises, whether verbal or written, shall alter this agreement unless explicitly stated herein.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-4">Assignment of Rights</h3>
        <p className="text-lg mb-4">
          You may not transfer or assign your rights or obligations under these Terms to any third party without our express written consent. However, StackViv AI reserves the right to assign or transfer its rights and obligations under these Terms to any entity, including but not limited to a subsidiary, parent company, or in connection with a merger, acquisition, or sale of assets, without restriction or notification.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
        <p className="text-lg">
          For inquiries, feedback, or support, please contact us at{' '}
          <a href="mailto:hello@stackviv.ai" className="text-blue-600 underline">hello@stackviv.ai</a>.
        </p>

        <p className="text-lg mt-8">
          Thank you for choosing StackViv AI as your AI resource directory.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfUse;
