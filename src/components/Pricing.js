// src/components/Pricing.js
import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      storage: "1TB Storage",
      features: ["File sync across devices", "Basic sharing", "Email support"],
      color: "blue",
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "/month",
      storage: "5TB Storage",
      features: [
        "Everything in Basic",
        "Advanced sharing controls",
        "Priority support",
        "Version history",
      ],
      color: "purple",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      storage: "Unlimited Storage",
      features: [
        "Everything in Premium",
        "Advanced security",
        "Admin controls",
        "24/7 phone support",
      ],
      color: "gray",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 transition-colors duration-300">
            Select the perfect plan for your storage needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-colors duration-300 ${
                plan.popular ? "ring-2 ring-purple-500 transform scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                  {plan.storage}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  plan.popular
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
