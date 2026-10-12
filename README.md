# Vinayak World website (vinayakworld.com)

React + Tailwind CSS (Vite) website for an institute teaching Artificial Intelligence, Cybersecurity, Networking and Cloud Computing. Fully responsive, no emojis, all illustrations are original SVG.

## 1. Requirements
- Node.js 18 or newer (https://nodejs.org, choose LTS)
- Git
- VS Code (recommended)

Check: `node -v` and `npm -v`

## 2. Run it on your computer
```bash
cd vinayakworld
npm install
npm run dev
```
Open the address shown (normally http://localhost:5173).

## 3. Project structure
```
src/
  data/courses.js      <- ALL course content, contact details, certification notes (edit here)
  components/          <- Navbar, Footer, CourseCard, Icons, Art (SVG illustrations), Logo
  pages/               <- Home, Courses, CoursePage, Contact
  index.css            <- Tailwind and shared button/heading styles
tailwind.config.js     <- brand colours (navy, gold) and fonts
```

## 4. Things you must change before launch
1. `src/data/courses.js`: set real email, phone, address and office hours in `INSTITUTE`.
2. Review the Artificial Intelligence course. No AI curriculum file was supplied, so that outline is a draft.
3. Contact form: it currently opens the visitor's email app. For real submissions, connect Formspree or Web3Forms, or build a small backend.
4. Add real fees, batch dates and photos when you have them.

## 5. Using real photos
Put images in `public/images/` and use `<img src="/images/classroom.jpg" alt="Classroom" className="h-full w-full object-cover" />` in place of the `<Art />` component.

## 6. Build for production
```bash
npm run build      # creates the dist/ folder
npm run preview    # test the production build locally
```

## 7. Deploy (free) and connect vinayakworld.com
1. Create a GitHub repository and push:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/vinayakworld.git
   git push -u origin main
   ```
2. Go to https://vercel.com (or https://netlify.com), sign in with GitHub, click Add New Project, import the repository. Settings are detected automatically: Framework Vite, build command `npm run build`, output `dist`.
3. After the first deploy, open Project Settings, then Domains, and add `vinayakworld.com` and `www.vinayakworld.com`.
4. At your domain registrar, add the DNS records Vercel shows you (usually an A record for the root domain and a CNAME for www). HTTPS is enabled automatically. DNS can take from a few minutes up to 48 hours.
5. Every `git push` to main redeploys the site automatically.

`vercel.json` and `public/_redirects` are already included so page refreshes on routes like /courses/cloud-computing work.

## 8. Recommended next steps
- Add a fees and batch schedule page.
- Add a gallery, faculty and student projects page.
- Add basic SEO: page titles per route, a sitemap and Google Search Console.
- Add analytics (Google Analytics or Plausible).

## Live "students enrolled" counter

Frontend only, no setup. It starts at the number in `src/data/stats.js` and ticks up by 1 every 20-45 seconds
(see `src/hooks/useEnrolledCount.js` to change the speed).
