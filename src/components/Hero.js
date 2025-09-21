// src/components/Hero.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ServerCabinet from "./Sphere";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(45deg) scale(1);
          }
          25% {
            transform: translate(20px, -15px) rotate(60deg) scale(1.05);
          }
          50% {
            transform: translate(-10px, -30px) rotate(30deg) scale(0.95);
          }
          75% {
            transform: translate(-25px, 10px) rotate(75deg) scale(1.02);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(-12deg) scale(1);
          }
          33% {
            transform: translate(-15px, 20px) rotate(15deg) scale(1.03);
          }
          66% {
            transform: translate(25px, -10px) rotate(-30deg) scale(0.97);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(90deg) scale(1);
          }
          20% {
            transform: translate(15px, 25px) rotate(105deg) scale(1.04);
          }
          40% {
            transform: translate(-20px, 15px) rotate(75deg) scale(0.96);
          }
          60% {
            transform: translate(10px, -20px) rotate(120deg) scale(1.02);
          }
          80% {
            transform: translate(-15px, -10px) rotate(60deg) scale(0.98);
          }
        }

        @keyframes svgFloat {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(5px, -10px);
          }
          50% {
            transform: translate(-5px, -5px);
          }
          75% {
            transform: translate(10px, 5px);
          }
        }

        @keyframes float4 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          30% {
            transform: translate(-10px, 15px) rotate(20deg) scale(1.06);
          }
          70% {
            transform: translate(15px, -5px) rotate(-15deg) scale(0.94);
          }
        }

        @keyframes float5 {
          0%,
          100% {
            transform: translate(0, 0) rotate(180deg) scale(1);
          }
          40% {
            transform: translate(8px, -12px) rotate(200deg) scale(1.02);
          }
          80% {
            transform: translate(-12px, 8px) rotate(160deg) scale(0.98);
          }
        }

        @keyframes float6 {
          0%,
          100% {
            transform: translate(0, 0) rotate(270deg) scale(1);
          }
          25% {
            transform: translate(-8px, -8px) rotate(290deg) scale(1.04);
          }
          50% {
            transform: translate(12px, -15px) rotate(250deg) scale(0.96);
          }
          75% {
            transform: translate(5px, 10px) rotate(310deg) scale(1.01);
          }
        }

        @keyframes float7 {
          0%,
          100% {
            transform: translate(0, 0) rotate(120deg) scale(1);
          }
          35% {
            transform: translate(12px, -8px) rotate(140deg) scale(1.03);
          }
          65% {
            transform: translate(-8px, 12px) rotate(100deg) scale(0.97);
          }
        }

        @keyframes float8 {
          0%,
          100% {
            transform: translate(0, 0) rotate(300deg) scale(1);
          }
          30% {
            transform: translate(-15px, -10px) rotate(320deg) scale(1.05);
          }
          70% {
            transform: translate(10px, 18px) rotate(280deg) scale(0.95);
          }
        }

        @keyframes float9 {
          0%,
          100% {
            transform: translate(0, 0) rotate(150deg) scale(1);
          }
          25% {
            transform: translate(8px, -12px) rotate(170deg) scale(1.02);
          }
          50% {
            transform: translate(-12px, 8px) rotate(130deg) scale(0.98);
          }
          75% {
            transform: translate(6px, 15px) rotate(190deg) scale(1.04);
          }
        }

        @keyframes float10 {
          0%,
          100% {
            transform: translate(0, 0) rotate(60deg) scale(1);
          }
          40% {
            transform: translate(-10px, 20px) rotate(80deg) scale(1.06);
          }
          80% {
            transform: translate(15px, -5px) rotate(40deg) scale(0.94);
          }
        }

        @keyframes float11 {
          0%,
          100% {
            transform: translate(0, 0) rotate(240deg) scale(1);
          }
          20% {
            transform: translate(12px, 8px) rotate(260deg) scale(1.01);
          }
          40% {
            transform: translate(-8px, -15px) rotate(220deg) scale(0.99);
          }
          60% {
            transform: translate(18px, -3px) rotate(280deg) scale(1.03);
          }
          80% {
            transform: translate(-5px, 12px) rotate(200deg) scale(0.97);
          }
        }

        .floating-circle-1 {
          animation: float1 20s ease-in-out infinite;
        }

        .floating-circle-2 {
          animation: float2 25s ease-in-out infinite;
        }

        .floating-circle-3 {
          animation: float3 18s ease-in-out infinite;
        }

        .floating-circle-4 {
          animation: float4 23s ease-in-out infinite;
        }

        .floating-circle-5 {
          animation: float5 19s ease-in-out infinite;
        }

        .floating-circle-6 {
          animation: float6 27s ease-in-out infinite;
        }

        .floating-circle-7 {
          animation: float7 24s ease-in-out infinite;
        }

        .floating-circle-8 {
          animation: float8 21s ease-in-out infinite;
        }

        .floating-circle-9 {
          animation: float9 26s ease-in-out infinite;
        }

        .floating-circle-10 {
          animation: float10 22s ease-in-out infinite;
        }

        .floating-circle-11 {
          animation: float11 28s ease-in-out infinite;
        }

        .floating-svg {
          animation: svgFloat 30s ease-in-out infinite;
        }

        /* Animation delays for particles */
        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Liquid glass hover effects */
        .liquid-glass-card {
          transition: all 0.3s ease;
        }

        .liquid-glass-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Glassmorphism enhancement */
        @supports (backdrop-filter: blur(16px)) {
          .glass-effect {
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
          }
        }

        /* 3D Text Effect for Retard Labs */
        .text-3d {
          text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb,
            0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1),
            0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
            0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        .text-3d:hover {
          transform: translateY(-4px);
          text-shadow: 0 2px 0 #ccc, 0 4px 0 #c9c9c9, 0 6px 0 #bbb,
            0 8px 0 #b9b9b9, 0 10px 0 #aaa, 0 12px 2px rgba(0, 0, 0, 0.1),
            0 0 10px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.3),
            0 6px 10px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.25),
            0 20px 20px rgba(0, 0, 0, 0.2), 0 40px 40px rgba(0, 0, 0, 0.15);
        }

        /* Dark theme 3D text */
        .dark .text-3d {
          text-shadow: 0 1px 0 #666, 0 2px 0 #555, 0 3px 0 #444, 0 4px 0 #333,
            0 5px 0 #222, 0 6px 1px rgba(255, 255, 255, 0.1),
            0 0 5px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.3),
            0 3px 5px rgba(255, 255, 255, 0.2),
            0 5px 10px rgba(255, 255, 255, 0.25),
            0 10px 10px rgba(255, 255, 255, 0.2),
            0 20px 20px rgba(255, 255, 255, 0.15);
        }

        .dark .text-3d:hover {
          text-shadow: 0 2px 0 #666, 0 4px 0 #555, 0 6px 0 #444, 0 8px 0 #333,
            0 10px 0 #222, 0 12px 2px rgba(255, 255, 255, 0.1),
            0 0 10px rgba(255, 255, 255, 0.1),
            0 2px 6px rgba(255, 255, 255, 0.3),
            0 6px 10px rgba(255, 255, 255, 0.2),
            0 10px 20px rgba(255, 255, 255, 0.25),
            0 20px 20px rgba(255, 255, 255, 0.2),
            0 40px 40px rgba(255, 255, 255, 0.15);
        }
      `}</style>

      <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ServerCabinet />
      </Canvas>
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Abstract geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-10 dark:opacity-5">
          <div className="floating-circle-1 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 opacity-8 dark:opacity-4">
          <div className="floating-circle-2 w-full h-full bg-gradient-to-bl from-green-400 via-blue-500 to-purple-600 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 opacity-6 dark:opacity-3">
          <div className="floating-circle-3 w-full h-full bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 rounded-full blur-xl"></div>
        </div>

        {/* Additional circles in top left area */}
        <div className="absolute top-16 left-12 w-48 h-48 opacity-7 dark:opacity-4">
          <div className="floating-circle-4 w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute top-32 left-64 w-32 h-32 opacity-5 dark:opacity-3">
          <div className="floating-circle-5 w-full h-full bg-gradient-to-bl from-indigo-400 via-purple-500 to-pink-400 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-8 left-40 w-56 h-56 opacity-6 dark:opacity-3">
          <div className="floating-circle-6 w-full h-full bg-gradient-to-tr from-teal-400 via-cyan-500 to-blue-500 rounded-full blur-2xl"></div>
        </div>

        {/* Circles in top right corner */}
        <div className="absolute top-12 right-16 w-40 h-40 opacity-6 dark:opacity-3">
          <div className="floating-circle-7 w-full h-full bg-gradient-to-bl from-rose-400 via-pink-500 to-purple-500 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-24 right-48 w-52 h-52 opacity-7 dark:opacity-4">
          <div className="floating-circle-8 w-full h-full bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-full blur-2xl"></div>
        </div>

        {/* Circles in bottom left corner */}
        <div className="absolute bottom-16 left-20 w-44 h-44 opacity-5 dark:opacity-3">
          <div className="floating-circle-9 w-full h-full bg-gradient-to-tr from-lime-400 via-green-500 to-emerald-500 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-32 left-56 w-36 h-36 opacity-6 dark:opacity-3">
          <div className="floating-circle-10 w-full h-full bg-gradient-to-bl from-violet-400 via-purple-500 to-indigo-500 rounded-full blur-2xl"></div>
        </div>

        {/* Circles in bottom right corner */}
        <div className="absolute bottom-20 right-12 w-48 h-48 opacity-7 dark:opacity-4">
          <div className="floating-circle-11 w-full h-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-full blur-xl"></div>
        </div>

        {/* Abstract lines and patterns */}
        <svg
          className="floating-svg absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="abstractGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient
              id="abstractGradient2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q400,100 800,300 T1600,200"
            stroke="url(#abstractGradient1)"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M0,400 Q300,200 600,500 T1200,300"
            stroke="url(#abstractGradient2)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="20%"
            cy="30%"
            r="100"
            fill="url(#abstractGradient1)"
            opacity="0.1"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; 10,-5; -5,10; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="80%"
            cy="70%"
            r="150"
            fill="url(#abstractGradient2)"
            opacity="0.1"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; -8,12; 15,-8; 0,0"
              dur="22s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Additional SVG circles in top left */}
          <circle
            cx="8%"
            cy="15%"
            r="60"
            fill="url(#abstractGradient1)"
            opacity="0.08"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; 5,8; -3,-5; 0,0"
              dur="18s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="15%"
            cy="8%"
            r="45"
            fill="url(#abstractGradient2)"
            opacity="0.06"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; -6,4; 8,-6; 0,0"
              dur="21s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="5%"
            cy="25%"
            r="35"
            fill="url(#abstractGradient1)"
            opacity="0.05"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; 4,-7; -2,9; 0,0"
              dur="16s"
              repeatCount="indefinite"
            />
          </circle>

          {/* SVG circles in top right corner */}
          <circle
            cx="88%"
            cy="12%"
            r="55"
            fill="url(#abstractGradient2)"
            opacity="0.07"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; -7,5; 4,-8; 0,0"
              dur="19s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="95%"
            cy="20%"
            r="40"
            fill="url(#abstractGradient1)"
            opacity="0.05"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; 3,-6; -5,7; 0,0"
              dur="17s"
              repeatCount="indefinite"
            />
          </circle>

          {/* SVG circles in bottom left corner */}
          <circle
            cx="12%"
            cy="85%"
            r="50"
            fill="url(#abstractGradient1)"
            opacity="0.06"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; 6,-4; -3,8; 0,0"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="6%"
            cy="92%"
            r="38"
            fill="url(#abstractGradient2)"
            opacity="0.04"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; -4,6; 7,-3; 0,0"
              dur="23s"
              repeatCount="indefinite"
            />
          </circle>

          {/* SVG circles in bottom right corner */}
          <circle
            cx="90%"
            cy="88%"
            r="65"
            fill="url(#abstractGradient2)"
            opacity="0.08"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; -8,3; 5,-9; 0,0"
              dur="24s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="85%"
            cy="95%"
            r="42"
            fill="url(#abstractGradient1)"
            opacity="0.05"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; 4,-5; -6,8; 0,0"
              dur="14s"
              repeatCount="indefinite"
            />
          </circle>

          <polygon
            points="70%,20% 90%,60% 50%,80% 30%,40%"
            fill="url(#abstractGradient1)"
            opacity="0.05"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              values="0; 360"
              dur="40s"
              repeatCount="indefinite"
            />
          </polygon>
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center pt-16 z-10">
        <h1 className="text-3d text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300 mb-8">
          Retard Labs&reg;
        </h1>

        {/* Liquid Glass Style Card */}
        <div className="relative max-w-4xl mx-auto mb-8 px-6">
          <div className="liquid-glass-card glass-effect relative backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/20">
            {/* Glass shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>

            {/* Liquid border animation */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center leading-relaxed">
                Innovative Technology Solutions for Modern Businesses
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 text-center leading-relaxed">
                From cloud infrastructure to custom applications, we deliver
                cutting-edge solutions that drive your business forward
              </p>
            </div>

            {/* Floating particles inside card */}
            <div className="absolute top-4 left-8 w-2 h-2 bg-blue-400/40 rounded-full animate-ping pointer-events-none"></div>
            <div className="absolute bottom-6 right-12 w-1 h-1 bg-purple-400/40 rounded-full animate-ping animation-delay-1000 pointer-events-none"></div>
            <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-pink-400/40 rounded-full animate-ping animation-delay-2000 pointer-events-none"></div>
          </div>

          {/* Additional glow effects */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl transform scale-105 opacity-75 pointer-events-none"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#products"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Explore Products
          </a>
          <a
            href="#services"
            className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
