# Sklassics React Website

A responsive multi-page Sklassics-inspired website built with React, Vite, React Router and plain CSS.

## Requirements
- Node.js (LTS recommended)
- npm

## Setup (Windows Command Prompt / PowerShell)

1. Extract this ZIP file.
2. Open the extracted `sklassics-react` folder in VS Code.
3. Open Terminal in VS Code (or Command Prompt) and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite, normally `http://localhost:5173/`.

## Add your hero image
Copy your image into the `public` folder and name it exactly:

```text
public/hero.png
```

The hero background is already configured to load `/hero.png`. If the file is missing, the dark gradient background still displays.

## Folder structure

```text
sklassics-react/
├── public/
│   └── hero.png              # Add your own hero image here
├── src/
│   ├── components/
│   │   ├── ContactBanner.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   ├── Newsletter.jsx
│   │   ├── ProjectCards.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Stats.jsx
│   │   └── WhyChooseUs.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Routes
- `/` — Home
- `/about` — About Us
- `/contact` — Contact Us

## Important notes
- The contact form and newsletter currently provide front-end feedback only. They do not send or store submissions. Connect them to a backend/API or email service before publishing.
- Project card images currently use remote Unsplash image URLs. Replace these URLs in `src/components/ProjectCards.jsx` with your own project images if preferred.
- Footer social links and project links are placeholders. Replace `#...` links with the real destinations.

## Production build

```bash
npm run build
npm run preview
```
