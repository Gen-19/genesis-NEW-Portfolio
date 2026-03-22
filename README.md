<<<<<<< HEAD
# genesis-NEW-Portfolio
NEW Deployment
=======
# Genesis Obando Portfolio — Next.js + Tailwind CSS

This is the rebuilt version of Genesis's portfolio, converted from plain HTML/CSS to **Next.js 14 (App Router)** with **Tailwind CSS**.

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your images
Copy all images from the original `images/` folder into `public/images/`:
```
public/images/face.JPG
public/images/NJlogo.png
public/images/CNBC.png
public/images/PR.png
public/images/sherrill.png
public/images/duck.png
public/images/gunsdownglovesup.jpg
public/images/Voter.png
public/images/harm.jpg
public/images/domestic.png
public/images/partycity.png
public/images/cancer.png
public/images/doingwhat.png
public/images/charts.png
public/images/homelessness.png
public/images/medianage.png
public/images/bullying.jpg
public/images/wardrugs.jpg
public/images/electionmiss.jpg
public/images/latinvoters.jpg
public/images/awardwin1.jpg
public/images/awardwin2.png
public/images/awardwin3.png
public/images/awardwin4.jpeg
```

### 3. Add your resume PDF
Place the resume PDF in the `public/` folder:
```
public/Genesis_Obando_Resume.pdf
```

### 4. Run in development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production
```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── layout.js               # Root layout
├── globals.css             # Global styles + Tailwind
├── page.js                 # Homepage (About, Portfolio, Resume, Contact)
├── njspotlight/
│   ├── page.js             # NJ Spotlight News grid
│   ├── sherrill-ig/        # Individual video/embed pages...
│   ├── lameduck-yt/
│   ├── lameduck-ig/
│   ├── lameduck-tt/
│   ├── gunsdown-yt/
│   ├── gunsdown-ig/
│   ├── votersguide-yt/
│   ├── votersguide-ig/
│   ├── votersguide-tt/
│   ├── domestic-ig/
│   ├── partycity-ig/
│   ├── partycity-tt/
│   ├── cancer-ig/
│   └── cancer-tt/
└── puerto-rico/
    ├── video-english/
    ├── video-spanish/
    └── photos/

components/
├── Navbar.js
├── Footer.js
├── BackButton.js
└── SubPageLayout.js

public/
├── images/       ← put all images here
└── Genesis_Obando_Resume.pdf
```

## Deploying to GitHub Pages
The site is static-export compatible. To deploy:
1. Add `output: 'export'` to `next.config.js`
2. Run `npm run build` — it will generate an `out/` folder
3. Push the `out/` folder to your GitHub Pages branch

## Deploying to Vercel (easiest)
1. Push this project to GitHub
2. Import it at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — just click Deploy!
>>>>>>> 7208d2e (New)
