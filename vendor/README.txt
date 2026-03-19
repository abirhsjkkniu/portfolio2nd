# Vendor Dependencies — Portfolio+ (Md. Abir Hossain Shihab)

This site loads all vendor libraries via CDN. Ensure internet access when viewing.

## Libraries Used

| Library          | Version | CDN Source                                     | Purpose                      |
|------------------|---------|------------------------------------------------|------------------------------|
| Font Awesome     | 6.5.0   | cdnjs.cloudflare.com                           | Icons throughout the site    |
| AOS              | 2.3.4   | cdnjs.cloudflare.com/aos.css + aos.js          | Scroll animations            |
| Google Fonts     | Latest  | fonts.googleapis.com                           | Playfair Display, EB Garamond, DM Mono |
| React            | 18      | unpkg.com/react@18                             | Interactive skills component |
| ReactDOM         | 18      | unpkg.com/react-dom@18                         | React DOM rendering          |
| Babel Standalone | Latest  | unpkg.com/@babel/standalone                    | JSX transpilation (skills page) |

## Offline Usage

For offline usage, download these libraries and update src paths in each HTML file:
- Replace CDN URLs with local paths under `/vendor/`
- Example: `<link rel="stylesheet" href="vendor/aos/aos.css" />`

## Directory Structure

```
portfolio/
├── index.html              ← Home / Hero
├── pages/
│   ├── education.html      ← Academic background
│   ├── research.html       ← Research projects & interests
│   ├── experience.html     ← Work experience & certifications
│   ├── achievements.html   ← Awards & recognitions
│   ├── skills.html         ← React-powered skills (CDN)
│   ├── activities.html     ← Co-curricular & voluntary
│   └── contact.html        ← Contact form
├── assets/
│   ├── css/
│   │   ├── style.css       ← Main stylesheet
│   │   └── sidebar.css     ← Sidebar component styles
│   ├── js/
│   │   ├── main.js         ← Core JS (loader, AOS, counters)
│   │   └── sidebar.js      ← Sidebar toggle logic
│   └── images/             ← Add profile photo here (optional)
└── vendor/
    └── README.txt          ← This file
```

## Notes

- The site uses a dark "Legal Luxe" aesthetic with gold (#c9a84c) accents
- Fonts: Playfair Display (headings) + EB Garamond (body) + DM Mono (labels)
- Responsive: sidebar collapses on screens ≤ 992px with hamburger toggle
- Particles animation runs on the home page hero section
- React is used only on skills.html for the interactive skill bar tabs
