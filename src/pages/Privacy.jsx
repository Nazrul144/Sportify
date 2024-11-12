import React from "react";
import Image from "next/image";
import { Roboto, Merriweather, Lobster } from "next/font/google";
import logo from "../../public/logo.png";

const roboto = Roboto({
  weight: ["400", "300"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const lovely = Merriweather({
  weight: ["400", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});

const Privacy = () => {
  return (
    <div>
      {/*Section-1 */}
      <section className="lg:mt-6">
        <h1 className={` text-2xl text-center text-[#FF5733] ${lobster.className}`}>Welcome to the Sportify Privacy Policy</h1>
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span className="relative z-10 bg-white px-6">
            <Image src={logo} width={30} height={30} alt="Logo" />
          </span>
        </span>
        <h1 className={` font-bold italic ${roboto.className}`}>Last modified: Oct 22, 2024</h1>
        <p className={`text-gray-700 text-xs text-justify ${roboto.className}`}>
          Sportify.com respects your privacy and is dedicated to safeguarding your personal information. We understand that you
          care deeply about how your data is collected, used, and shared, and we value the trust you place in us to handle this
          information responsibly. Our Privacy Policy outlines the measures we take to ensure your information is protected and
          used only as needed to provide a seamless and personalized experience. At Sportify.com, we are committed to transparency
          and maintaining your confidence through careful and sensible data practices.
        </p>{" "}
        <br />
        <p className={`text-gray-700 text-xs text-justify ${roboto.className}`}>
          <span className="font-bold">Please take the time to thoroughly review the Privacy Policy.</span> By accessing and using
          the services provided by Sportify.com, you acknowledge and consent to the collection, processing, and use of your
          personal data by Sportify.com, as described in this Privacy Policy. This policy is designed to explain how we handle
          your information responsibly and transparently, ensuring your data is used to enhance your experience with our services.
          By proceeding, you confirm your understanding and acceptance of these terms and our commitment to protecting your
          privacy.
        </p>
      </section>
      {/*Section-2*/}
      <section className="lg:mt-12">
        <h1 className={`text-xl text-gray-700 ${roboto.className}`}>We encourage you to:</h1>
        <span className="flex items-center lg:w-[240px] mb-4">
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <li className={` text-gray-700 text-xs ${roboto.className}`}>Trust in the reliability of our website.</li>
        <li className={` text-gray-700 text-xs ${roboto.className}`}>Use our website with confidence.</li>
        <li className={` text-gray-700 text-xs ${roboto.className}`}>Rest assured when submitting your information.</li>
        <li className={` text-gray-700 text-xs ${roboto.className}`}>
          Reach out to us if you have any questions or concerns regarding privacy on this site.
        </li>
        <li className={` text-gray-700 text-xs ${roboto.className}`}>
          By using our website, you consent to the collection of data.
        </li>
      </section>
      {/*Section-3*/}
      <section className="mt-12">
        <h1 className={`text-gray-700 text-xl ${roboto.className}`}>What information might be collected from you?</h1>
        <span className="flex items-center lg:w-[520px] mb-4">
          <span className="h-px flex-1 bg-black"></span>
        </span>

        <p className={`text-xs text-gray-700 ${roboto.className}`}>
          In our standard usage logs, we automatically receive and collect certain anonymous information via our web server. This
          includes computer-identification details obtained from "cookies" sent to your browser and stored on your hard drive, the
          IP address assigned to your computer, the domain server used to access our service, as well as the type of computer and
          web browser you're using.
        </p>
        <br />
        <p className={`text-xs text-gray-700 mb-4 ${roboto.className}`}>
          We may collect the following personally identifiable information about you -
        </p>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>Name including first and last name.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>Alternate email address.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>Mobile phone number and contact details.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>ZIP/Postal code.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>
          Financial information (like account or credit card numbers) - Opinions of features on our websites.
        </li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>Other information as per our registration process.</li>
        <br />
        <p className={`text-xs text-gray-700 mb-4 ${roboto.className}`}>We may also collect the following information -</p>

        <li className={`text-xs text-gray-700  ${roboto.className}`}>About the pages you visit/access.</li>
        <li className={`text-xs text-gray-700  ${roboto.className}`}>The number of times you access the page.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>The links you click on our site.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>The number of times you have shopped on our web site.</li>
        <br />
        <p className={`text-xs text-gray-700 mb-4 ${roboto.className}`}>
          You may close your account at any time. However, even after your account is deleted or terminated, your information may
          still be retained in archives on our servers.
        </p>
      </section>
      {/*Section-4*/}
      <section>
        <h1 className={`text-xl text-gray-700 ${roboto.className}`}>Who collects the information?</h1>
        <span className="flex items-center lg:w-[331px] mb-4">
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <p className={`text-xs text-gray-700 mb-4 ${roboto.className}`}>
          When you visit our site, we collect anonymous traffic data. We only gather personally identifiable information about you
          if you voluntarily provide it through registration, online surveys, contests, or a combination of these. Our advertisers
          may also gather anonymous traffic data through cookies placed on your browser. The site may contain links to external
          websites, but we are not responsible for the privacy practices of websites that we do not own, manage, or control.
        </p>
      </section>
      {/*Section-5*/}
      <section>
        <h1 className={`text-xl text-gray-700 ${roboto.className}`}>How is the information used?</h1>
        <span className="flex items-center lg:w-[325px] mb-4">
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <h1 className={` text-xs text-gray-700 mb-4 ${roboto.className}`}>We use your personal information to:</h1>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>
          Make our bond more stronger by knowing your interests and tailoring our site to that.
        </li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>To get in touch with you when necessary.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>To provide the services requested by you.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>
          To preserve social history as governed by existing law or policy.
        </li>
        <br />
        <h1 className={` text-xs text-gray-700 mb-4 ${roboto.className}`}>We use contact information internally to:</h1>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>Direct our efforts for product improvement.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>Contact you as a survey respondent.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>Notify you if you win any contest; and</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>
          Send you promotional materials from our contest sponsors or advertisers.
        </li>{" "}
        <br />
        <h1 className={` text-xs text-gray-700 mb-4 ${roboto.className}`}>Generally, we use anonymous traffic information to:</h1>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>
          Remind us of who you are in order to deliver to you a better and more personalized service from both an advertising and
          an editorial perspective recognize your access privileges to our Websites
        </li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>
          Track your entries in some of our promotions, sweepstakes and contests to indicate a player's progress through the
          promotion and to track entries, submissions, and status in prize drawings.
        </li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>Make sure that you don't see the same ad repeatedly</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>Help diagnose problems with our server.</li>
        <li className={`text-xs text-gray-700 ${roboto.className}`}>
          Administer our websites, track your session so that we can understand better how people use our sites.
        </li>{" "}
        <br />
      </section>
      {/*Section-6*/}
      <section>
        <h1 className={`text-xl text-center text-gray-700 ${roboto.className}`}>
          What choices are available to you regarding collection, use and distribution of your information?
        </h1>
        <span class="relative flex justify-center">
          <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span class="relative z-10 bg-white px-6">**</span>
        </span>
        <h1 className={`text-xs text-justify text-gray-700 ${roboto.className}`}>
          You can update your interests at any time and choose to opt-in or opt-out of marketing, promotional, or newsletter
          mailings. However, Sportify.com reserves the right to send you certain account-related communications, which are
          considered essential to your Sportify.com account, without an option to opt-out. You can also update your information
          and modify your account settings at any time. <br />
          <br /> If you request, we will remove or block your personally identifiable information from our database, which will
          cancel your registration. However, some of your information may remain in archived storage on our servers even after
          your account is deleted or terminated. Should we intend to use your personally identifiable information for commercial
          purposes, we will inform you when we collect that information and give you the option to opt-out of such use.
        </h1><br />
      </section>
      {/*Section-7*/}
      <section className="mb-12">
        <h1 className={`text-xl text-center text-gray-700 ${roboto.className}`}>
          What security procedures are in place to protect information from loss, misuse or alteration?
        </h1>
        <span class="relative flex justify-center">
          <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span class="relative z-10 bg-white px-6">**</span>
        </span>
        <h1 className={`text-xs text-justify text-gray-700 ${roboto.className}`}>
          At Sportify, we implement physical, electronic, and managerial safeguards to protect your information from loss, misuse,
          and unauthorized changes. For instance, only authorized personnel have access to our servers, and your information is
          shared only with relevant team members on a need-to-know basis to process transactions and deliver requested services.
          While we work diligently to ensure the confidentiality of your personal information, it’s important to understand that
          Internet transmissions cannot be entirely secure. By using this site, you acknowledge that Sportify is not liable for
          any information disclosure due to transmission errors or unauthorized actions by third parties.
        </h1>
      </section>
    </div>
  );
};

export default Privacy;
