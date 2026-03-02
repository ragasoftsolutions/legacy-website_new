# Legacy Migration Advisory — React Frontend

Built with **React + Vite + Tailwind CSS**

## Tech Stack
- React 18
- React Router DOM v6
- Tailwind CSS v3
- Vite v5

## Project Structure

```
legacy-migration-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar/         ← Sticky nav, mega dropdown, mobile menu
│   │   ├── Hero/           ← Auto-sliding hero with Unsplash images
│   │   ├── About/          ← Split layout with stats bar
│   │   ├── Services/       ← Alternating image-content rows
│   │   ├── WhyUs/          ← Two-column flowing text, dark bg
│   │   ├── Countries/      ← Full-width horizontal strips
│   │   ├── Testimonials/   ← Editorial vertical layout
│   │   ├── CTA/            ← Dark green CTA banner
│   │   └── Footer/         ← 4-column footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           ← Tailwind + custom animations
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Color Theme
| Token       | Value      | Usage                    |
|-------------|------------|--------------------------|
| `gold`      | `#C9A84C`  | Accents, CTAs, headings  |
| `forest`    | `#1B3A2D`  | Body text, borders       |
| `forest-deeper` | `#0D2318` | Dark sections, nav bg |
| `cream`     | `#F5F0E8`  | Page background          |
| `white`     | `#ffffff`  | Card sections            |

## Backend Integration (MERN)
When ready to connect to your Express/MongoDB backend:

1. Create `/src/services/api.js` with Axios or fetch calls
2. Connect enquiry forms → `POST /api/enquiries`
3. Add `.env` with `VITE_API_URL=http://localhost:5000`

## Notes
- Scroll-triggered fade-up animations use IntersectionObserver (no library needed)
- Hero images use Unsplash CDN — replace with your own in `Hero.jsx`
- All sections are modular and ready for React Router page splitting
