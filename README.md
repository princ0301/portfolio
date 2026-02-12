# Princek Kumar - Portfolio Website

A modern, responsive React portfolio website showcasing software development and AI/ML expertise.

## 🚀 Features

- **5 Main Sections**: Hero, About, Skills, Experience, Projects, Contact
- **Dynamic Skills Section** with Certifications & Achievements subsections
- **Professional Experience Timeline** with visual timeline design
- **Smart Display Logic**: Certifications/Achievements/Experience only show if data exists
- **Fully Responsive**: Mobile, tablet, and desktop friendly
- **Easy to Expand**: Add projects, skills, certifications, experience with simple array modifications
- **Modern Design**: Dark theme with animated gradients and smooth transitions

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section with CTA
│   │   ├── About.jsx        # About section with expertise cards
│   │   ├── Skills.jsx       # Skills + Certifications + Achievements
│   │   ├── Experience.jsx   # Professional experience timeline
│   │   ├── Projects.jsx     # Project showcase
│   │   ├── Contact.jsx      # Contact section
│   │   └── Footer.jsx       # Footer with social links
│   ├── data/
│   │   └── portfolioData.js # ALL CONTENT HERE - Easy to edit!
│   ├── App.jsx              # Main app component
│   ├── App.css              # All styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Visit: `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```

## ✏️ How to Customize

### All content is in `src/data/portfolioData.js` - Edit this ONE file!

### 1. Personal Information
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername"
};
```

### 2. About Section
```javascript
export const about = {
  heading: "Your heading",
  paragraphs: [
    "First paragraph...",
    "Second paragraph..."
  ],
  expertise: [
    {
      icon: "🚀",
      title: "Your Expertise",
      description: "Description..."
    }
    // Add more expertise cards...
  ]
};
```

### 3. Skills
```javascript
export const skills = {
  categories: [
    {
      icon: "💻",
      title: "Category Name",
      skills: ["Skill1", "Skill2", "Skill3"]
    }
    // Add more categories...
  ]
};
```

### 4. Certifications (Optional - Set to `[]` to hide)
```javascript
certifications: [
  {
    name: "Certificate Name",
    issuer: "Issuing Organization",
    date: "2024",
    credentialId: "ABC123"
  }
  // Add more certifications or set to [] to hide section
]
```

### 5. Achievements (Optional - Set to `[]` to hide)
```javascript
achievements: [
  {
    title: "🏆 Achievement Title",
    description: "What you achieved...",
    year: "2024"
  }
  // Add more achievements or set to [] to hide section
]
```

### 6. Projects - Easy to Expand!
```javascript
export const projects = [
  {
    id: 1,
    icon: "💼",
    title: "Project Name",
    description: "Project description...",
    tags: ["Tag1", "Tag2"],
    type: "software", // "software", "ml", or "hybrid"
    demoLink: "https://demo.link",
    githubLink: "https://github.com/link"
  }
  // Just copy and paste to add more projects!
];
```

### 7. Experience - Professional Timeline (Optional - Set to `[]` to hide)
```javascript
export const experience = [
  {
    id: 1,
    company: "Company Name",
    position: "Your Position",
    duration: "Jan 2023 - Present",
    location: "City, Country",
    type: "Full-time", // or "Contract", "Part-time", etc.
    description: "Brief description of role...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"]
  }
  // Add more experience or set to [] to hide section
];
```

## 🎨 Customization Tips

### Hide Certifications, Achievements, or Experience
In `portfolioData.js`, simply set to empty array:
```javascript
certifications: [],  // Section won't show
achievements: [],    // Section won't show
experience: [],      // Section won't show
```

### Add More Projects
Just copy an existing project object and modify:
```javascript
{
  id: 7,  // Increment the ID
  icon: "🎨",
  title: "New Project",
  description: "Description here...",
  tags: ["React", "Node.js"],
  type: "software",
  demoLink: "#",
  githubLink: "#"
}
```

### Add More Skills Categories
```javascript
{
  icon: "🔥",
  title: "New Category",
  skills: ["Skill1", "Skill2", "Skill3"]
}
```

### Change Colors
Edit CSS variables in `App.css`:
```css
:root {
  --accent: #00D9FF;        /* Change primary accent color */
  --accent-warm: #FF6B9D;   /* Change secondary accent color */
  --background: #05070F;    /* Change background color */
}
```

## 📱 Responsive Design

- **Desktop**: Full layout with all features
- **Tablet**: Adjusted grid layouts
- **Mobile**: Single column, hidden navigation (add hamburger menu if needed)

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 💡 Tips

1. **Easy Content Updates**: Everything is in `portfolioData.js` - just edit and save!
2. **Projects**: Use `type: "software"`, `"ml"`, or `"hybrid"` for proper tag coloring
3. **Icons**: Use emojis in `icon` fields for quick visual elements
4. **Conditional Sections**: Certifications/achievements auto-hide when empty
5. **Smooth Animations**: Fade-in effects trigger on scroll automatically

## 📝 License

Free to use for personal portfolios!

---

**Need Help?** Check the code comments in `portfolioData.js` for guidance on each field.
