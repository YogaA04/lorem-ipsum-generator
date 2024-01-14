# Lorem Ipsum Generator

## Introduction
The application I built with Remix js, uses the lorem-ipsum library and uses Tailwindcss. Inspired from the repository:
```
https://github.com/florinpop17/app-ideas/
```
## Installation
```
git clone https://github.com/YogaA04/lorem-ipsum-generator.git
```
```
cd lorem-ipsum-generator
```
```
npm install
```
```
npm run dev
```
## Structure and Components
- `root.jsx`: In the root file I just added a global.css link, and created a simple navbar
- `utilities/libs/generateLorem.js`: Simple library for generating lorem-ipsum text
- `routes/_index.jsx`: the main page that almost everything is executed here. Sets up the HTML structure and includes the generateLorem.js library and main script.
