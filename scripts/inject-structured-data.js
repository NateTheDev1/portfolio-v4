/**
 * Injects schema.org JSON-LD into the built index.html.
 *
 * This cannot live in public/index.html: Create React App minifies that file
 * with html-minifier-terser using `minifyJS: true`, which runs terser over the
 * contents of every <script> tag -- including application/ld+json. Terser parses
 * the JSON object as a JavaScript block statement, finds only no-op string
 * expressions inside it, and eliminates them as dead code, leaving an empty "{}".
 *
 * Running after the build sidesteps the minifier entirely and keeps the
 * structured data static in the shipped HTML, so it is visible to crawlers that
 * do not execute JavaScript.
 */
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://nathanielengineers.com";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nathaniel Richards",
  jobTitle: "Software Engineer",
  url: SITE_URL,
  image: `${SITE_URL}/me.jpg`,
  sameAs: [
    "https://github.com/NateTheDev1",
    "https://www.linkedin.com/in/nathaniel-richards-dev/",
  ],
};

const indexPath = path.join(__dirname, "..", "build", "index.html");

if (!fs.existsSync(indexPath)) {
  console.error(`[structured-data] ${indexPath} not found. Did the build run?`);
  process.exit(1);
}

let html = fs.readFileSync(indexPath, "utf8");

// Drop any ld+json the minifier already emptied out, so re-runs stay idempotent.
html = html.replace(
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
  ""
);

const tag = `<script type="application/ld+json">${JSON.stringify(
  structuredData
)}</script>`;

if (!html.includes("</head>")) {
  console.error("[structured-data] No </head> in build/index.html.");
  process.exit(1);
}

html = html.replace("</head>", `${tag}</head>`);
fs.writeFileSync(indexPath, html);

console.log("[structured-data] Injected Person JSON-LD into build/index.html");
