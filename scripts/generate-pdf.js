import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { gitCommandsForPDF } from './gitCommandsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Generate HTML content
  let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          width: 210mm;
          height: auto;
        }
        
        body {
          width: 210mm;
          margin: 0;
          padding: 6mm;
          background: #1a1625;
          color: #fafafa;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.2;
        }
        
        .header {
          text-align: center;
          margin-bottom: 8px;
          page-break-after: avoid;
        }
        
        .main-title {
          font-size: 20px;
          font-weight: bold;
          color: #a855f7;
          margin-bottom: 3px;
          line-height: 1.1;
        }
        
        .subtitle {
          color: #9ca3af;
          font-size: 10px;
          margin-bottom: 2px;
        }
        
        .attribution {
          color: #6b7280;
          font-size: 8px;
          font-style: italic;
        }
        
        .category {
          margin-bottom: 6px;
          page-break-inside: avoid;
        }
        
        .category-title {
          font-size: 13px;
          font-weight: bold;
          color: #a855f7;
          border-bottom: 1.5px solid #a855f7;
          padding-bottom: 2px;
          margin-bottom: 5px;
          text-align: center;
          page-break-after: avoid;
        }
        
        .command-card {
          margin-bottom: 5px;
          padding: 6px;
          border: 1px solid #374151;
          border-radius: 3px;
          background: #1f2937;
          page-break-inside: avoid;
          break-inside: avoid;
        }
        
        .command-name {
          font-family: 'Courier New', monospace;
          font-weight: bold;
          color: #a855f7;
          font-size: 10px;
          margin-bottom: 3px;
        }
        
        .command-usage {
          background: #111827;
          padding: 3px 5px;
          border-radius: 2px;
          font-family: 'Courier New', monospace;
          font-size: 8.5px;
          color: #10b981;
          margin-bottom: 4px;
          word-wrap: break-word;
        }
        
        .command-description {
          font-size: 8.5px;
          color: #d1d5db;
          margin-bottom: 3px;
          line-height: 1.25;
        }
        
        .command-usecase {
          font-size: 7.5px;
          color: #9ca3af;
          line-height: 1.25;
        }
        
        .usecase-label {
          color: #8b5cf6;
          font-weight: 600;
        }
        
        .page-break {
          page-break-before: always !important;
          break-before: page !important;
          display: block;
          height: 1px;
          margin: 0;
          padding: 0;
        }
        
        @page {
          size: A4;
          margin: 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 class="main-title">Git Command Cheat Sheet</h1>
        <p class="subtitle">Quick reference for all essential Git commands</p>
        <p class="attribution">Git Tutorial by Koorosh Komeili Zadeh and De Leidsche Flesch</p>
      </div>
  `;

  // Group commands by category
  const categories = ["CREATE", "LOCAL CHANGES", "COMMIT HISTORY", "BRANCHES & TAGS", "UPDATE & PUBLISH", "MERGE & REBASE", "UNDO"];
  
  categories.forEach((category, index) => {
    const categoryCommands = gitCommandsForPDF.filter(cmd => cmd.category === category);
    if (categoryCommands.length === 0) return;
    
    htmlContent += `
      <div class="category">
        <h2 class="category-title">${category}</h2>
    `;
    
    categoryCommands.forEach(cmd => {
      htmlContent += `
        <div class="command-card">
          <div class="command-name">$ ${cmd.command}</div>
          <div class="command-usage">${cmd.usage}</div>
          <div class="command-description">${cmd.description}</div>
          <div class="command-usecase">
            <span class="usecase-label">Use case:</span> ${cmd.useCase}
          </div>
        </div>
      `;
    });
    
    htmlContent += `</div>`;
  });

  htmlContent += `
    </body>
    </html>
  `;

  // Set content and generate PDF
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false
  });

  await browser.close();
  
  // Save PDF to public directory
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'git-command-cheatsheet.pdf'), pdfBuffer);
  console.log('✅ PDF generated successfully: public/git-command-cheatsheet.pdf');
  console.log(`📄 Generated PDF with ${gitCommandsForPDF.length} commands across ${categories.length} categories`);
}

generatePDF().catch(console.error);