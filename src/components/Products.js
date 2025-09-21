// src/components/Products.js
import React from "react";

const Products = () => {
  const products = [
    {
      name: "Retard Cloud",
      tagline: "Enterprise Cloud Storage Platform",
      description:
        "Secure, scalable cloud storage solution designed for businesses of all sizes. Store, sync, and share your files with enterprise-grade security and unlimited scalability.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      features: [
        "Unlimited storage capacity",
        "Real-time file synchronization",
        "Advanced sharing controls",
        "Enterprise-grade encryption",
        "Version history & recovery",
        "API integration support",
      ],
      pricing: "",
      status: "Available",
      color: "blue",
    },
    {
      name: "Retard CI",
      tagline: "Continuous Integration & Deployment Platform",
      description:
        "Streamline your development workflow with our powerful CI/CD platform. Automate builds, tests, and deployments with seamless integration to your existing tools.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      features: [
        "Automated CI/CD pipelines",
        "Multi-cloud deployment",
        "Container orchestration",
        "Security scanning integration",
        "Performance monitoring",
        "Team collaboration tools",
      ],
      pricing: "",
      status: "Beta",
      color: "green",
    },
    {
      name: "Retard Analytics",
      tagline: "Advanced Data Analytics Platform",
      description:
        "Transform your business data into actionable insights with our comprehensive analytics platform. Real-time dashboards, predictive analytics, and custom reporting.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      features: [
        "Real-time data processing",
        "Custom dashboard creation",
        "Machine learning insights",
        "Data visualization tools",
        "API data connectors",
        "Automated reporting",
      ],
      pricing: "",
      status: "Coming Soon",
      color: "purple",
    },
    {
      name: "Retard Security",
      tagline: "Cybersecurity & Compliance Suite",
      description:
        "Comprehensive security solution protecting your digital assets. Threat detection, vulnerability management, and compliance automation in one platform.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      features: [
        "24/7 threat monitoring",
        "Vulnerability assessments",
        "Compliance automation",
        "Incident response tools",
        "Security training modules",
        "Risk management dashboard",
      ],
      pricing: "",
      status: "Coming Soon",
      color: "red",
    },
    {
      name: "Retard Edge",
      tagline: "Edge Computing Platform",
      description:
        "Deploy applications closer to your users with our edge computing platform. Reduce latency, improve performance, and enhance user experience globally.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      features: [
        "Global edge network",
        "Low-latency computing",
        "Auto-scaling capabilities",
        "Content delivery optimization",
        "IoT device management",
        "Real-time data processing",
      ],
      pricing: "s",
      status: "Development",
      color: "indigo",
    },
    {
      name: "Retard API",
      tagline: "Developer API Gateway",
      description:
        "Powerful API management platform for developers. Create, manage, and scale APIs with advanced security, analytics, and developer tools.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      features: [
        "API gateway management",
        "Rate limiting & throttling",
        "Authentication & authorization",
        "Real-time analytics",
        "Developer documentation",
        "SDK generation",
      ],
      pricing: "",
      status: "Beta",
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        border: "border-blue-200",
        text: "text-blue-600",
      },
      green: {
        bg: "from-green-500 to-green-600",
        border: "border-green-200",
        text: "text-green-600",
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        border: "border-purple-200",
        text: "text-purple-600",
      },
      red: {
        bg: "from-red-500 to-red-600",
        border: "border-red-200",
        text: "text-red-600",
      },
      indigo: {
        bg: "from-indigo-500 to-indigo-600",
        border: "border-indigo-200",
        text: "text-indigo-600",
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        border: "border-orange-200",
        text: "text-orange-600",
      },
    };
    return colors[color] || colors.blue;
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Available:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Beta: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "Coming Soon":
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Development:
        "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    };
    return statusStyles[status] || statusStyles["Development"];
  };

  return (
    <section
      id="products"
      className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Our Products & Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Comprehensive technology solutions designed to accelerate your
            digital transformation. From cloud storage to CI/CD pipelines, we've
            got your tech stack covered.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
            >
              {/* Product Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${
                      getColorClasses(product.color).bg
                    } rounded-lg flex items-center justify-center text-white`}
                  >
                    {product.icon}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                      product.status
                    )}`}
                  >
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {product.name}
                </h3>
                <p
                  className={`text-sm font-medium ${
                    getColorClasses(product.color).text
                  } dark:opacity-80 mb-3`}
                >
                  {product.tagline}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {product.description}
                </p>
              </div>

              {/* Product Features */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  Key Features:
                </h4>
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {product.pricing}
                    </span>
                  </div>
                  {product.name === "Retard Cloud" &&
                  product.status === "Available" ? (
                    <a
                      href="https://cloud.retardlabs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg font-medium transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                    >
                      Get Started
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    <button
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        product.status === "Available"
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : product.status === "Beta"
                          ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                          : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 cursor-not-allowed"
                      }`}
                      disabled={!["Available", "Beta"].includes(product.status)}
                    >
                      {product.status === "Available"
                        ? "Get Started"
                        : product.status === "Beta"
                        ? "Join Beta"
                        : "Coming Soon"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Our team specializes in
            building custom technology solutions tailored to your specific
            business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Discuss Custom Solutions
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 transition-colors duration-300">
            Built with Modern Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", color: "text-blue-500" },
              { name: "Node.js", color: "text-green-500" },
              { name: "Docker", color: "text-blue-600" },
              { name: "Kubernetes", color: "text-purple-500" },
              { name: "AWS", color: "text-orange-500" },
              { name: "TypeScript", color: "text-blue-600" },
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className={`text-lg font-semibold ${tech.color}`}>
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
