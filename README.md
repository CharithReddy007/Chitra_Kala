# Chitra Kala — Traditional Painting & Natural Pigments

A React + TypeScript + Tailwind CSS website about India's ancient painting traditions and natural pigments. All original images and source code included.

## Run Locally

```bash
npm install
npm run dev
```
Open http://localhost:5173

## Deploy to GitHub Pages

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/chitra-kala.git
git push -u origin main
```

### Step 2 — Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 3 — Add to package.json scripts
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### Step 4 — Deploy
```bash
npm run deploy
```

Your site will be live at: **https://YOUR_USERNAME.github.io/chitra-kala**

---

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion (animations)
- Wouter (routing)
- shadcn/ui components
- Lucide icons
