# Cactus Clash — Cowboy Arcade Jumper

![Cactus Clash Social Share](public/meta/social-share.png)

**Live Demo:** [cactusclash.com](https://cactusclash.com)

[![Next.js](https://img.shields.io/badge/Next.js-15.1.2-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)  
[![React](https://img.shields.io/badge/React-19.0.0-20232A?style=flat&logo=react&logoColor=white)](https://react.dev/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)  
[![Kaboom.js](https://img.shields.io/badge/Kaboom.js-3000.1.17-FA4E0A?style=flat)](https://kaboomjs.com/)  
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)  

**Cactus Clash** is a fast-paced, cowboy-themed arcade jumper game built with modern web technologies. Players swing from ropes, jump over enemies, trade ammo, and team up with helpful allies as waves of raiders intensify across a Wild West landscape. This project showcases a polished full-stack web app integrating a **Next.js** frontend with a **Kaboom.js** game engine, all implemented in **TypeScript** and styled with **Tailwind CSS** for a responsive, mobile-friendly experience.

---

## Table of Contents

- [🚀 Live Demo](#-live-demo)
- [🎮 Gameplay Features](#-gameplay-features)
- [🛠️ Tech Stack & Implementation](#️-tech-stack--implementation)
  - [Next.js & React](#nextjs--react)
  - [TypeScript](#typescript)
  - [Tailwind CSS](#tailwind-css)
  - [Kaboom.js Game Engine](#kaboomjs-game-engine)
  - [Additional Libraries](#additional-libraries)
  - [Deployment (Vercel)](#deployment-vercel)
- [📦 Setup & Development](#-setup--development)
- [🚚 Deployment](#-deployment)
- [🎨 Credits](#-credits)

---

## 🚀 Live Demo

👉 [**Play now at cactusclash.com**](https://cactusclash.com)

No installation required — the game runs directly in your browser on both desktop and mobile.

---

## 🎮 Gameplay Features

- **Wave-based raids**: Multiple enemies spawn in "raid" events as the score increases.
- **Increasing difficulty**: Enemies become faster and spawn more frequently as you progress.
- **Allies and power-ups**:
  - *Green allies*: Heal the player.
  - *Birds*: Grant shields.
  - *Cowboys*: Replenishes the grappling rope.
  - *Supply carts*: Exchange coins for arrows.
- **Strategic resources**:
  - *Rope*: Escape danger by swinging over enemies. Limited time use.
  - *Arrows*: Shoot enemies from a distance. Ammo is limited and must be earned.
- **Day/night cycle**: Dynamic environment shifts between day and night with sun/moon and lighting changes.
- **Custom artwork & audio**:
  - All pixel art and sprite animations made using Photoshop and AI tools like MidJourney.
  - Sound effects and background music enhance gameplay feedback.
- **Mobile/desktop support**:
  - Touch controls and scalable canvas allow responsive gameplay on all devices.
- **In-game “How to Play” guide**:
  - Sprite-based wiki explains controls, UI icons, enemies, and allies.

---

## 🛠️ Tech Stack & Implementation

### Next.js & React

- **Next.js 15** with the App Router architecture.
- Page structure, metadata, layout, and client/server separation handled via the `app/` directory.
- **React 19** used for UI rendering and game integration.
- Game lifecycle managed via hooks (`useEffect`, `useState`) and DOM refs for canvas injection.
- UI components like `Navbar`, `Footer`, `GameController`, and `HowToPlay` are modular and responsive.

### TypeScript

- Fully typed codebase for both React components and game logic interfaces.
- Type-safe props, refs, state, and game state interfaces.
- Modern syntax with strict linting ensures maintainability and code confidence.

### Tailwind CSS

- Tailwind v3 utility-first framework for styling.
- Responsive grid layout, animations, iconography, and custom font loading.
- Custom darkened section backgrounds and hover effects enhance immersion.

### Kaboom.js Game Engine

- Handles physics, rendering, asset management, audio, and game loop.
- Declarative object creation (e.g., `add([sprite(), pos(), body()])`) with collision tags and physics behavior.
- Scenes: `"world"` (gameplay) and `"lose"` (game over).
- Responsive design through canvas scaling wrapper (`ScaledCanvas`), not engine zoom.
- Sprite atlases used for animation (e.g., `sliceX`, `anims`, `run`).
- Modular asset loading and custom game actions exposed via `GameActions`.

### Additional Libraries

- **Lucide-React** for UI icons (Pause, Volume, etc.).
- **FontAwesome** used in select places for recognizable control indicators.
- **Next Fonts**: Custom pixel fonts and Google Fonts optimized using `@next/font`.

### Deployment (Vercel)

- Hosted on Vercel with continuous integration from GitHub.
- Next.js detects and builds the project automatically.
- Optimized static deployment with CDN asset delivery.

---

## 📦 Setup & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/colewendling/cactusclash.git
   cd cactusclash
   ```

2. **Install dependencies using `pnpm`**:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game locally.

---

## 🚚 Deployment

- Deployment is handled via [**Vercel**](https://vercel.com), optimized for Next.js.
- Production build commands:
  ```bash
  pnpm run build
  pnpm start
  ```

- Live site: [https://cactusclash.com](https://cactusclash.com)

---

## 🎨 Credits

All code, design, sprites, and sounds created specifically for this project.

- Built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, **Kaboom.js**.
- Hosted on **Vercel**.
- Sprite animations and pixel art made using **Photoshop** and **MidJourney**.
- Icons provided by **Lucide** and **Font Awesome**.

---

> ✨ Want a deeper dive? Browse the source code for detailed implementations, animation logic, Kaboom integrations, and UI components.