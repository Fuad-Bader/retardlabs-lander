// src/components/Services.js
import React from "react";

const Services = () => {
  const services = [
    {
      title: "DevOps Consultations",
      description:
        "Streamline your development and operations with expert DevOps strategies, CI/CD pipeline implementation, and automation solutions.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Alerting",
        "Container Orchestration",
      ],
      color: "blue",
    },
    {
      title: "Infrastructure Design & Management",
      description:
        "Design scalable, secure, and cost-effective cloud infrastructure tailored to your business needs with ongoing management support.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v4.514A2 2 0 008.293 9.22l-3.5 3.5A2 2 0 006.207 16H17.793a2 2 0 001.414-3.28l-3.5-3.5A2 2 0 0015 7.514V3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3h6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v8"
          />
        </svg>
      ),
      features: [
        "Cloud Architecture Design",
        "Multi-Cloud Strategies",
        "Security Implementation",
        "Cost Optimization",
      ],
      color: "green",
    },
    {
      title: "Custom App Development",
      description:
        "Full-stack application development with modern technologies, from concept to deployment, including ongoing maintenance and updates.",
      icon: (
        <svg
          className="w-8 h-8"
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
        "Web & Mobile Applications",
        "API Development",
        "Database Design",
        "Performance Optimization",
      ],
      color: "purple",
    },
    {
      title: "System Architecture & Design",
      description:
        "Enterprise-grade system architecture planning, microservices design, and scalable solution blueprints for complex business requirements.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      features: [
        "Microservices Architecture",
        "Data Flow Design",
        "Integration Planning",
        "Scalability Solutions",
      ],
      color: "indigo",
    },
    {
      title: "Solution Deployment",
      description:
        "End-to-end deployment services ensuring smooth transitions from development to production with zero-downtime strategies.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
      features: [
        "Production Deployment",
        "Blue-Green Deployments",
        "Rollback Strategies",
        "Environment Management",
      ],
      color: "orange",
    },
    {
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance services including monitoring, updates, security patches, and 24/7 technical support for your applications.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 40.96 40.96"
          strokeWidth="2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="2"
            d="M20.48 0C9.169 0 0 9.169 0 20.48s9.169 20.48 20.48 20.48 20.48 -9.169 20.48 -20.48S31.791 0 20.48 0m5.12 3.319a17.947 17.947 0 0 1 12.028 12.041h-8.303A10.267 10.267 0 0 0 25.6 11.637zm2.545 17.169c0 4.237 -3.432 7.672 -7.665 7.672s-7.665 -3.435 -7.665 -7.672 3.432 -7.673 7.665 -7.673 7.665 3.436 7.665 7.673M17.92 2.757q1.255 -0.183 2.56 -0.185 1.305 0.003 2.56 0.185v7.832c-0.819 -0.212 -1.675 -0.336 -2.56 -0.336s-1.74 0.124 -2.56 0.336zm-2.56 0.561v8.319a10.267 10.267 0 0 0 -3.725 3.723H3.332a17.933 17.933 0 0 1 12.028 -12.041M2.572 20.487c0 -0.873 0.075 -1.727 0.195 -2.567h7.816a10.199 10.199 0 0 0 -0.003 5.12H2.765a18.133 18.133 0 0 1 -0.193 -2.553M15.36 37.653a17.947 17.947 0 0 1 -12.032 -12.053H11.627a10.307 10.307 0 0 0 3.733 3.736zm7.68 0.561c-0.836 0.12 -1.691 0.185 -2.56 0.185s-1.724 -0.065 -2.56 -0.185v-7.831c0.82 0.212 1.675 0.336 2.56 0.336s1.741 -0.124 2.56 -0.336zm2.56 -0.561v-8.317a10.267 10.267 0 0 0 3.732 -3.736h8.299a17.947 17.947 0 0 1 -12.032 12.053zm4.78 -14.613a10.173 10.173 0 0 0 -0.004 -5.12h7.816c0.12 0.84 0.195 1.693 0.195 2.567 0 0.868 -0.073 1.719 -0.193 2.553z"
          />
        </svg>
      ),
      features: [
        "24/7 Monitoring",
        "Security Updates",
        "Performance Tuning",
        "Technical Support",
      ],
      color: "red",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      indigo: "from-indigo-500 to-indigo-600",
      orange: "from-orange-500 to-orange-600",
      red: "from-red-500 to-red-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="services"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Beyond cloud storage, we offer comprehensive technical services to
            accelerate your digital transformation and optimize your technology
            infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:scale-105"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(
                  service.color
                )} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
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
                    <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Infrastructure?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how our expert team can help you build, deploy, and
            maintain scalable solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Schedule Consultation
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Process Overview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">
            Our Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understand your requirements and current infrastructure",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Design tailored solutions and create implementation roadmap",
              },
              {
                step: "03",
                title: "Implementation",
                desc: "Deploy solutions with minimal disruption to your operations",
              },
              {
                step: "04",
                title: "Support",
                desc: "Provide ongoing maintenance and optimization support",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {phase.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
