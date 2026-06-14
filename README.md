# Sameer Khan — Frontend Developer Portfolio

-🙎‍♂️[Portfolio](https://sameer-khan-dev.github.io/my-portfolio/)

**Repo:** [GitHub](https://github.com/sameer-khan-dev/my-portfolio)

> A clean, responsive personal portfolio website built to showcase my skills, projects, and experience as a Frontend Developer actively seeking internship opportunities.

**GitHub →** [github.com/sameer-khan-dev](https://github.com/sameer-khan-dev) &nbsp;|&nbsp; **LinkedIn →** [linkedin.com/in/sameer-khan-858a3137a](https://www.linkedin.com/in/sameer-khan-858a3137a)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Setup](#environment-setup)
- [Deployment](#deployment)
- [Sections](#sections)
- [Contact](#contact)

---

## Overview

This portfolio is built entirely from scratch without any templates or UI kits. The goal was to demonstrate real frontend skills — component architecture, responsive design, form handling, and clean UI — in a single, cohesive project.

It features a dark purple design language, smooth anchor navigation, a working contact form powered by EmailJS, and is fully responsive across mobile, tablet, and desktop.

---

## Features

- **Fully Responsive** — mobile-first layout using Tailwind's responsive utilities
- **Smooth Anchor Navigation** — navbar links scroll directly to sections
- **Working Contact Form** — powered by EmailJS with no backend required
- **Downloadable Resume** — one-click Resume download from the navbar
- **Component-Based Architecture** — clean, reusable React components throughout
- **Mobile Hamburger Menu** — collapsible nav for small screens
- **Project Showcase** — cards with tech stack badges, GitHub links, and live demo links
- **Skills Section** — visual progress bars showing proficiency per technology

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI component library |
| Vite | Build tool and dev server |
| Tailwind CSS v4 | Utility-first styling |
| EmailJS | Contact form email delivery |
| Font Awesome | Icon library |
| GitHub Pages / Vercel | Deployment |

---

## Project Structure

```
portfolio/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── assets/
│   │   └── Sameer_Khan_Frontend_Developer_Resume.pdf + My logo
│   ├── App.jsx                 # Root component — assembles all sections
│   ├── main.jsx                # React DOM entry point
│   ├── index.css               # Global styles (Tailwind import)
│   │
│   ├── Navbar.jsx              # Top navigation bar with Resume download
│   ├── HomeBar.jsx             # Mobile hamburger menu drawer
│   ├── HeroSection.jsx         # Landing hero with CTA buttons
│   ├── InfoCard.jsx            # Stats bar (projects, technologies, status)
│   ├── Info.jsx                # Individual stat item
│   │
│   ├── About.jsx               # About section wrapper
│   ├── AboutCard.jsx           # Individual about card
│   │
│   ├── Skills.jsx              # Skills section wrapper
│   ├── SkillsList.jsx          # Grid of all skill cards
│   ├── SkillsCard.jsx          # Individual skill with progress bar
│   │
│   ├── Projects.jsx            # Projects section wrapper
│   ├── ProjectsList.jsx        # List of project cards
│   ├── ProjectCard.jsx         # Individual project card
│   │
│   ├── Contact.jsx             # Contact section wrapper
│   ├── Form.jsx                # EmailJS contact form
│   ├── Links.jsx               # GitHub / LinkedIn / Resume links
│   │
│   └── Footer.jsx              # Footer with credit and copyright
|__README                       #Contain the information about Portfolio 
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/sameer-khan-dev/my-portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in browser**

```
http://localhost:5173
```

---

## Environment Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails without a backend. To enable it:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an **Email Service** and note your `Service ID`
3. Create an **Email Template** with variables `{{name}}`, `{{email}}`, `{{message}}` and note your `Template ID`
4. Copy your **Public Key** from the EmailJS dashboard
5. In `index.html`, initialise EmailJS and update the IDs:

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Vite — click **Deploy**
4. Your site is live in ~60 seconds

### GitHub Pages

1. Install the gh-pages package:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:

```json
"homepage": "https://sameer-khan-dev.github.io/my-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add `base` to `vite.config.js`:

```js
export default {
  base: '/my-portfolio/',
}
```

4. Deploy:

```bash
npm run deploy
```

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Introduction, tagline, and CTA buttons |
| **Stats Bar** | Quick stats — projects done, technologies, work status |
| **About** | Who I am, what I'm seeking, education, and interests |
| **Skills** | Visual proficiency bars for HTML, CSS, JS, React, Tailwind, Git |
| **Projects** | Showcase cards with tech stack, GitHub links, and live demos |
| **Contact** | EmailJS-powered form + social links |

---

## Projects Showcased

### Portfolio Website
- **Tech:** React, Tailwind CSS
- **Description:** This very site — built from scratch to showcase my frontend skills

### Amazon Homepage Clone
- **Tech:** HTML5, CSS3
- **Description:** Pixel-perfect clone of the Amazon homepage demonstrating advanced HTML structure and CSS layout skills
- **Live:** [Live Site](https://sameer-khan-dev.github.io/my-amazon-clone/) | **Repo:** [GitHub](https://github.com/sameer-khan-dev/my-amazon-clone)

### Currency Coverter
-**Tech:** HTML5, CSS3, JavaScript
- **Description:** Integrated ExchangeRate API to fetch live exchange rates for 150+ currencies, rendering results in under 300ms.
- **Live:** [Live Site](https://sameer-khan-dev.github.io/js-learning-projects/currency-converter/) | **Repo:** [GitHub](https://github.com/sameer-khan-dev/js-learning-projects/tree/main/currency-converter)

---

## Contact

I'm actively looking for **frontend internship opportunities**. If you'd like to work together or have a role that might be a fit, I'd love to hear from you.

- **Email:** sameerkhan821852@gmail.com
- **LinkedIn:** [linkedin.com/in/sameer-khan-858a3137a](https://www.linkedin.com/in/sameer-khan-858a3137a)
- **GitHub:** [github.com/sameer-khan-dev](https://github.com/sameer-khan-dev)

---

## License

This project is open source under the [MIT License](LICENSE). Feel free to use it as inspiration for your own portfolio — just don't copy it wholesale and claim it as your own work.

---

<p align="center">Designed and built with ♥ by <strong>Sameer Khan</strong> · © 2025</p>
