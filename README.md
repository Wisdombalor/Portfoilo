# Wisdom portfolio

Imported from `/Users/mac/Downloads/portfolio.html`. The original export is preserved in `original.html`.

## Run

```sh
npm ci
npm run dev
```

Production: `npm run build`. Deploy the `dist` directory with Vercel’s Vite preset.

## Agentation

The development preview includes Agentation's visual feedback toolbar. Click its bottom-right button, select an element, and add a note. It connects to `http://localhost:4747`.

Agentation MCP is registered in Codex's user configuration. Restart Codex or reconnect MCP servers to load it. Codex then starts the local server automatically. The official `agentation` skill is installed for the next turn.

Verified browser-to-MCP delivery with a clearly marked test note, then resolved that note. The production build excludes the toolbar. The standalone HTML is a production export and does not contain Agentation.

## Applied skills

- Frontend design and portfolio homepage principles: Butter palette, Geist, clear role and live project evidence.
- Responsive web app and mobile-native: flexible layout, safe areas, 44px navigation targets, swipeable screenshots, no page overflow at 320/390/768/1440px.
- UX writing: direct action labels, brief descriptions, no invented research, metrics or achievements.
- Emil design engineering and motion-system: subtle interruptible press feedback; 75ms ease-out-quad press, 150ms ease-out-cubic release. Hover uses 75ms ease-out-quad. Focus appears immediately. Reduced motion removes scaling.
- Vercel React best practices: direct icon imports, local fonts, lazy-loaded screenshots, no animation library or remote rendering dependency.

## Icons

Five official SVG exports from https://centralicons.com/ using Line / round / 1.5px. Exported through the site’s free trial. Only these icons are included, not the full paid library. The original paths are preserved in `src/icons.jsx`; strokes use currentColor.

## Verification

Production build passed. Browser checks passed: screenshot load, anchor targets, copy email, feature disclosure, no console errors, responsive page width. Motion audit: zero errors and warnings. Real mobile hardware testing has not been performed.

## Content

Steady is the supplied project. Screenshots and feature statements come from the original export. No resume, additional projects, testimonials or performance metrics were invented.
