// pages/privacy-policy.js

import Head from "next/head";

export const metadata = {
  title: "Privacy Policy",
  description: `This Privacy Policy describes how we collect, use, and protect your
          personal information when you participate in the Happy Tokens program`,
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 sm:px-10 md:px-20 mt-[80px]">
      <Head>
        <title>Privacy Policy - Happy Tokens</title>
        <meta
          name="description"
          content="Privacy Policy for Happy Tokens Program"
        />
      </Head>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-customBlue3 mb-4">
          Privacy Policy for Happy Tokens
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          *Effective Date:* 15 December 2024
        </p>

        <p className="text-lg mb-4">
          This Privacy Policy describes how we collect, use, and protect your
          personal information when you participate in the Happy Tokens program
          (the "Program"). By using the Program, you agree to the terms of this
          Privacy Policy. If you do not agree, you may not participate.
        </p>

        <hr className="border-t-2 border-gray-300 mb-6" />

        <h2 className="text-2xl font-semibold text-customBlue3 mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect the following types of information to provide and improve
          the Program:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Personal Information:</strong> Your name, email address,
            phone number, and other information you provide when creating an
            account.
          </li>
          <li>
            <strong>Transaction Information:</strong> Details of your
            transactions, such as the amount spent, the shops or online, and the
            date of the transaction.
          </li>
          <li>
            <strong>Device Information:</strong> Information about the device
            you use to access the Program, including device type, operating
            system, and IP address.
          </li>
          <li>
            <strong>Usage Data:</strong> Data about how you interact with the
            Program, including how often you use it, the features you access,
            and your activity on the platform.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-customBlue3 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="mb-6">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>To provide, maintain, and improve the Program.</li>
          <li>
            To communicate with you regarding your account, transactions, and
            updates about the Program.
          </li>
          <li>To analyze usage patterns and improve the user experience.</li>
          <li>
            To ensure compliance with our Terms and Conditions and prevent
            fraudulent activities.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-customBlue3 mb-3">
          3. How We Protect Your Information
        </h2>
        <p className="mb-6">
          We take the security of your personal information seriously and employ
          a range of physical, technical, and administrative measures to protect
          it from unauthorized access, disclosure, or misuse. However, please
          note that no security system is completely secure, and we cannot
          guarantee the absolute protection of your information.
        </p>

        <h2 className="text-2xl font-semibold text-customBlue3 mb-3">
          4. Sharing Your Information
        </h2>
        <p className="mb-6">
          We may share your information in the following situations:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>With Service Providers:</strong> We may share your
            information with third-party service providers who assist in the
            operation of the Program (e.g., payment processors, analytics
            services).
          </li>
          <li>
            <strong>For Legal Reasons:</strong> We may disclose your information
            if required to do so by law, regulation, or legal process (e.g.,
            subpoena, court order).
          </li>
          <li>
            <strong>In Business Transfers:</strong> If we are involved in a
            merger, acquisition, or sale of assets, your information may be
            transferred as part of that transaction.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-customBlue3 mb-3">
          5. Your Choices and Rights
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Access and Update:</strong> You can access and update your
            personal information through your account settings.
          </li>
          <li>
            <strong>Opt-Out:</strong> You can opt out of receiving marketing
            communications at any time by following the unsubscribe instructions
            in our emails.
          </li>
          <li>
            <strong>Data Deletion:</strong> You may request the deletion of your
            account and personal information by contacting us at [Insert Email].
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-customBlue3 mb-3">
          6. Data Retention
        </h2>
        <p className="mb-6">
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, or as required
          by law. Once your information is no longer needed, we will securely
          delete it.
        </p>

        <h2 className="text-2xl font-semibold text-customBlue3 mb-3">
          7. Cookies and Tracking Technologies
        </h2>
        <p className="mb-6">
          We use cookies and similar technologies to enhance your experience
          with the Program, track usage, and gather analytics. You can control
          cookie settings through your browser, but disabling cookies may affect
          your ability to use certain features of the Program.
        </p>

        <h2 className="text-2xl font-semibold text-customBlue3 mb-3">
          8. International Data Transfers
        </h2>
        <p className="mb-6">
          Your information may be stored and processed in locations outside of
          your country of residence. By using the Program, you consent to the
          transfer of your information to these locations.
        </p>

        <h2 className="text-2xl font-semibold text-customBlue3 mb-3">
          9. Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. We encourage
          you to review this Privacy Policy periodically to stay informed about
          how we are protecting your information.
        </p>

        <h2 className="text-2xl font-semibold text-customBlue3 mb-3">
          10. Contact Us
        </h2>
        <p className="mb-6">
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at:
        </p>
        <p className="text-blue-500">enquiry.adpro@gmail.com</p>

        <hr className="border-t-2 border-gray-300 my-6" />

        <p className="text-sm text-gray-600">
          *Acknowledgment*: By using the Program, you acknowledge that you have
          read, understood, and agree to this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
