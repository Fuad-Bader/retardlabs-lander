# Retard Labs - Technology Solutions Website

A modern, interactive technology company website built with React, featuring cutting-edge 3D graphics, responsive design, and comprehensive business solutions showcase.

## 🚀 Overview

Retard Labs is a comprehensive technology solutions provider specializing in cloud infrastructure, custom application development, DevOps consulting, and system architecture. This website showcases our services and products with an immersive, interactive user experience.

## ✨ Features

### 🎨 Modern UI/UX

- **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- **Glassmorphism Design** - Modern liquid glass card effects and transparency
- **3D Text Effects** - Eye-catching 3D typography for brand elements
- **Responsive Design** - Optimized for all device sizes and screen resolutions

### 🎯 Interactive 3D Graphics

- **Three.js Integration** - Powered by @react-three/fiber and @react-three/drei
- **Interactive Wireframe Icosahedron** - Mouse-responsive 3D geometry that follows cursor movement
- **Animated Abstract Backgrounds** - Dynamic floating particles and gradient shapes
- **Smooth Animations** - CSS keyframes and Three.js animations for fluid interactions

### 📱 Pages & Sections

- **Hero Section** - Interactive 3D background with liquid glass content cards
- **Products Page** - Showcase of 6 technology solutions including Roko Store and Roko CI
- **Services Section** - 6 comprehensive service categories with detailed descriptions
- **Contact Form** - Functional contact form with API integration (JSONPlaceholder)
- **Navigation** - Responsive navbar with theme toggle and smooth scrolling

### 🛠 Technology Stack

- **Frontend**: React 18+ with modern hooks and functional components
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Styling**: Tailwind CSS with custom animations and glassmorphism effects
- **State Management**: React Context for theme management with localStorage persistence
- **Build Tool**: Create React App with optimized production builds

## 🏗 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation with theme toggle
│   ├── Hero.js            # Main hero section with 3D backgrounds
│   ├── Products.js        # Products showcase page
│   ├── Services.js        # Services section
│   ├── Contact.js         # Contact form with API integration
│   ├── Sphere.js          # 3D wireframe icosahedron component
│   └── CloudModel.js      # Legacy 3D model component (deprecated)
├── contexts/
│   └── ThemeContext.js    # Theme management context
├── App.js                 # Main application component
├── index.js              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎯 Products & Services

### Products

- **Retard Store** - Enterprise cloud storage solution
- **Retard CI** - Continuous integration and deployment platform
- **Retard Analytics** - Advanced data analytics platform
- **Retard Security** - Comprehensive cybersecurity suite
- **Retard Edge** - Edge computing infrastructure
- **Retard API** - RESTful API management platform

### Services

- **DevOps Consultation** - Infrastructure automation and optimization
- **Infrastructure Design & Management** - Scalable cloud architecture
- **Custom App Development** - Full-stack application development
- **Solution Deployment** - End-to-end deployment strategies
- **System Architecture & Design** - Enterprise-grade system design
- **24/7 Technical Support** - Round-the-clock technical assistance

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Fuad-Bader/retardlabs-lander.git
   cd retard-labs-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

#### `npm start`

Runs the app in development mode with hot reloading.

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run build`

Builds the app for production with optimizations.

#### `npm run eject`

⚠️ **One-way operation** - Ejects from Create React App for full configuration control.

## 🎨 Customization

### Theme Configuration

The theme system supports easy customization:

- Modify colors in `src/contexts/ThemeContext.js`
- Update Tailwind config in `tailwind.config.js`
- Customize 3D elements in component files

### 3D Graphics

- Wireframe geometry can be modified in `Sphere.js`
- Animation parameters are configurable in each component
- Three.js materials and lighting can be adjusted

### Contact Form

- Update API endpoint in `Contact.js`
- Modify form fields and validation as needed
- Currently uses JSONPlaceholder for demonstration

## 🌟 Performance Features

- **Optimized Bundle Size** - Tree-shaking and code splitting
- **Lazy Loading** - Components loaded on demand
- **GPU Acceleration** - Hardware-accelerated 3D graphics
- **Responsive Images** - Optimized assets for different screen sizes
- **Efficient Animations** - CSS transforms and Three.js optimizations

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers with WebGL support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - React application boilerplate

## 📞 Contact

**Retard Labs**

- Website: [retardlabs.com](https://retardlabs.com)
- Support: Available 24/7

---

Built with ❤️ by the Retard Labs team as a meme and coding practice.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
