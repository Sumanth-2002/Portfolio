# Sumanth Portfolio Website

A premium, modern portfolio website built with React for showcasing full-stack development and UI/UX design services.

## Features

- 🎨 Modern, premium dark theme design
- 📱 Fully responsive across all devices
- ⚡ Smooth animations with Framer Motion
- 🚀 Fast and optimized performance
- 📄 Multiple pages (Home, About, Projects, Services, Testimonials, Contact)
- 💼 Professional presentation of skills and projects

## Tech Stack

- React 18
- React Router DOM
- Framer Motion (animations)
- CSS3 with custom properties

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps to Run Locally

1. **Extract the ZIP file** to your desired location

2. **Open terminal/command prompt** in the project folder

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

The website will automatically reload when you make changes to the code.

## Project Structure

```
sumanth-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Services.js
│   │   ├── Testimonials.js
│   │   └── Contact.js
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Projects.css
│   │   ├── Services.css
│   │   ├── Testimonials.css
│   │   └── Contact.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Customization

### Update Personal Information

1. **Navbar Logo:** Edit `src/components/Navbar.js` - change the logo text
2. **Footer Details:** Edit `src/components/Footer.js` - update contact info and links
3. **About Page:** Edit `src/pages/About.js` - add your personal story, skills, and achievements
4. **Projects:** Edit `src/pages/Projects.js` - add your actual projects
5. **Services:** Edit `src/pages/Services.js` - customize pricing and offerings

### Change Colors

Edit `src/styles/index.css` and modify the CSS variables:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
}
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Drag and drop the `build` folder
2. Or connect GitHub repository

### GitHub Pages
1. Install gh-pages
2. Configure and deploy

## Support

For questions:
- Email: thotamsettysumanth@gmail.com
- LinkedIn: linkedin.com/in/sumanth-thotamsetty

---

**Made with ❤️ by Sumanth Thotamsetty**
