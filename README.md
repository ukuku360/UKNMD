# Personal Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🌓 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design for all device sizes
- ✨ Smooth animations and transitions using Framer Motion
- 📄 Detailed project pages
- 📝 Contact form
- 🎨 Clean and modern UI

## Tech Stack

- **Frontend**:
  - React
  - React Router
  - Tailwind CSS
  - Framer Motion

- **Deployment Options**:
  - Vercel (recommended)
  - Netlify
  - GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```
   npm start
   # or
   yarn start
   ```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
personal-portfolio/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   ├── shared/       # Shared components
│   │   └── ui/           # UI components
│   ├── data/             # Data files
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
├── package.json          # Project dependencies
└── tailwind.config.js    # Tailwind CSS configuration
```

## Customization

### Personal Information

Edit the following files to add your personal information:

- `src/components/layout/Header.jsx` - Change the name in the logo
- `src/components/layout/Footer.jsx` - Update contact information
- `src/data/social.js` - Add your social media links
- `src/components/sections/About.jsx` - Update your bio and skills
- `src/components/sections/Resume.jsx` - Update your education and experience
- `src/data/projects.js` - Add your own projects

### Styling

The project uses Tailwind CSS for styling. You can customize the colors, fonts, and other design elements in the `tailwind.config.js` file.

### Deployment

#### Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com/)
3. Import your GitHub repository
4. Deploy

#### Deploy to Netlify

1. Push your code to a GitHub repository
2. Go to [Netlify](https://netlify.com/)
3. Import your GitHub repository
4. Set the build command to `npm run build`
5. Set the publish directory to `build`
6. Deploy

## Backend Integration

For contact form functionality, you have several options:

1. **Serverless Functions** (Recommended):
   - Use Netlify Forms or Vercel Serverless Functions
   - Simple setup with no server maintenance

2. **Express.js Backend**:
   - Create a simple Express server for handling form submissions
   - Deploy to services like Railway, Render, or Fly.io

### Setting up Netlify Forms

1. Add the following to your form in `src/components/sections/Contact.jsx`:

```jsx
<form
  onSubmit={handleSubmit}
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  {/* Your existing form fields */}
</form>
```

2. Deploy to Netlify, and the form submissions will be available in your Netlify dashboard.

## License

This project is open source and available under the [MIT License](LICENSE).
