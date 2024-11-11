import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className="space-y-4">
 {/*Question 1*/}
  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-2 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
      Q: What types of sports equipment does Sportify offer?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            ficlipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700 text-justify">
    A: Sportify offers a comprehensive selection of sports equipment for a variety of activities, including footballs, cricket bats, basketballs, tennis rackets, and fitness gear like dumbbells and yoga mats. Whether you're looking for equipment for team sports, individual training, or recreational play, we aim to provide top-quality products to meet your athletic needs. Our catalog also includes accessories and protective gear to help you perform at your best.
    </p>
  </details>
{/*Question 2*/}
  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-2 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
      Q: How can I ensure I’m choosing the right equipment for my sport?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            ficlipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700 text-justify">
    A: We understand that selecting the right equipment can be challenging, especially with so many options. To help, we include detailed descriptions, specifications, and size guides for each product. Our website also features buying guides to provide more insights. If you’re still unsure, our support team is available to answer any questions and offer personalized recommendations to ensure you pick the right gear based on your experience level and goals.
    </p>
  </details>
  {/*Question3*/}
  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-2 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
      Q: What is Sportify’s return policy for sports equipment?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            ficlipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700 text-justify">
    A: At Sportify, we want you to be completely satisfied with your purchase. If you're not happy with a product, you can return it within 30 days, provided it is unused and in its original packaging. Once we receive and inspect the item, we’ll process your refund or exchange. We strive to make the return process as smooth as possible, and you can find further details and instructions on our Return Policy page.
    </p>
  </details>
  {/*Question 4*/}
  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-2 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
      Q: Does Sportify offer discounts on bulk orders?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            ficlipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700 text-justify">
    A: Yes, we offer special discounts on bulk orders for sports teams, schools, organizations, and fitness centers. Buying in bulk can be a great way to save on essential equipment. For bulk orders, please contact our customer service team with details on the products and quantities you need. We’ll provide you with a custom quote and guide you through the ordering process, ensuring a smooth experience from start to finish.
    </p>
  </details>
  {/*Question 5*/}
  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-2 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
      Q: How long does delivery take for orders?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            ficlipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700 text-justify">
    A: Delivery times vary depending on your location and chosen shipping method. Standard shipping typically takes 3-7 business days, while expedited options can reduce delivery to 1-3 business days. After placing an order, you’ll receive tracking information to monitor the delivery status. If you have a specific deadline or need assistance with shipping, feel free to reach out to us, and we’ll do our best to accommodate your needs.
    </p>
  </details>
</div>
        </div>
    );
}

export default FAQ;
