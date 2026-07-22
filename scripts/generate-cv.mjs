// Renders cv/cv-template.html to public/cv-mahmoud-metwalli.pdf using Puppeteer.
// The HTML file is the permanent source of truth for the CV — edit it, then re-run
// `npm run cv` to regenerate the PDF served at /cv-mahmoud-metwalli.pdf.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const templatePath = path.join(projectRoot, "cv", "cv-template.html");
const outputPath = path.join(projectRoot, "public", "cv-mahmoud-metwalli.pdf");

async function resolveExecutablePath() {
  // Prefer a locally installed Chromium (from `puppeteer` package's own download).
  try {
    const bundled = puppeteer.executablePath();
    if (bundled && fs.existsSync(bundled)) return bundled;
  } catch {
    // fall through to @sparticuz/chromium
  }

  // Fallback for environments without a bundled Chromium (e.g. serverless-style setups).
  const chromium = (await import("@sparticuz/chromium")).default;
  return chromium.executablePath();
}

async function main() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`CV template not found at ${templatePath}`);
  }

  const executablePath = await resolveExecutablePath();
  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(templatePath).href, { waitUntil: "networkidle0" });
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      margin: { top: "0", bottom: "0", left: "0", right: "0" },
    });
    console.log(`CV generated: ${path.relative(projectRoot, outputPath)}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("Failed to generate CV:", err);
  process.exitCode = 1;
});
