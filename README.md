# 🌙 Dark Mode Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a sleek dark mode design with smooth animations and an intuitive user experience.

## ✨ Features

- **🎨 Modern Dark Mode UI** - Beautiful dark theme with cyan accent colors and gradient overlays
- **📱 Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **🚀 Smooth Animations** - Scroll-triggered animations and transitions for enhanced UX
- **🧭 Smooth Navigation** - Sticky navigation bar with smooth scrolling to sections
- **📊 Interactive Sections**:
  - Hero Section with call-to-action
  - Focus Areas showcase
  - Statistics display
  - About section
  - Professional Experience timeline
  - Skills showcase
  - Projects portfolio
  - Certifications gallery
  - Contact form
- **⬆️ Scroll to Top** - Convenient button to quickly return to the top
- **🎯 SEO Optimized** - Clean structure and semantic HTML

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 6.3.5** - Fast build tool and dev server
- **Tailwind CSS 4.1.12** - Utility-first CSS framework

### UI Components & Libraries
- **Radix UI** - Accessible component primitives (Accordion, Dialog, Dropdown, Tabs, etc.)
- **Material UI** - Additional UI components and icons
- **Lucide React** - Beautiful icon library
- **Motion** - Animation library for smooth transitions
- **React Hook Form** - Form state management
- **Recharts** - Charting library for data visualization

### Additional Tools
- **next-themes** - Theme management
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class utilities

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Darkmodeportfoliowebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🚀 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production (outputs to `dist/` folder)

## 📁 Project Structure

```
Darkmodeportfoliowebsite/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── About.tsx
│   │   │   ├── Certifications.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── FocusAreas.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── useScrollAnimation.tsx
│   │   │   ├── figma/
│   │   │   └── ui/          # Reusable UI components (shadcn/ui)
│   │   └── App.tsx          # Main application component
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── main.tsx             # Application entry point
├── public/                   # Static assets
├── dist/                     # Production build output
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

## 🎨 Customization

### Updating Personal Information
Edit the respective component files in `src/app/components/`:
- `HeroSection.tsx` - Name, title, and tagline
- `About.tsx` - Personal bio and information
- `Experience.tsx` - Work experience entries
- `Skills.tsx` - Skills and technologies
- `Projects.tsx` - Portfolio projects
- `Certifications.tsx` - Certifications and achievements
- `Contact.tsx` - Contact information and form

### Styling
- Global styles: `src/styles/index.css`
- Tailwind configuration: `tailwind.css`
- Theme colors: Modify Tailwind classes in components or update `theme.css`

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Deploy to Vercel
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings

### Deploy to Netlify
1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`

## 📝 License

This project is private and personal. All rights reserved.

## 👤 Author

**Subrata Bhuin**
- Junior AI Engineer
- Building intelligent systems with Agentic AI, Snowflake Cortex, and generative AI technologies

## 🙏 Acknowledgments

- Design inspiration from [Figma Design](https://www.figma.com/design/9DfGBMqM191Put70hHK0hw/Dark-Mode-Portfolio-Website)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ If you find this project helpful, please consider giving it a star!
