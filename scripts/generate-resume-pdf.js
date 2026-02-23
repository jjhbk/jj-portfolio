#!/usr/bin/env node

/**
 * Resume PDF Generator Script
 * 
 * Usage:
 *   node scripts/generate-resume-pdf.js
 * 
 * This script generates a PDF version of the resume from the /resume page.
 * The PDF is saved to public/resume/Jathin_Jagannath_Resume.pdf
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'resume');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'Jathin_Jagannath_Resume.pdf');
const RESUME_URL = 'http://localhost:3000/resume';

async function generateResumePDF() {
  console.log('🚀 Starting resume PDF generation...\n');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log('📁 Created output directory:', OUTPUT_DIR);
  }

  let browser;
  try {
    // Launch browser
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    // Set viewport to letter size
    await page.setViewport({
      width: 816,  // 8.5 inches at 96 DPI
      height: 1056, // 11 inches at 96 DPI
      deviceScaleFactor: 2,
    });

    console.log('🌐 Navigating to resume page...');
    await page.goto(RESUME_URL, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for fonts to load
    await page.waitForTimeout(2000);

    console.log('📄 Generating PDF...');
    
    // Generate PDF
    await page.pdf({
      path: OUTPUT_FILE,
      format: 'letter',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in',
      },
      preferCSSPageSize: true,
    });

    console.log('\n✅ Resume PDF generated successfully!');
    console.log('📄 Output:', OUTPUT_FILE);
    console.log('📊 File size:', (fs.statSync(OUTPUT_FILE).size / 1024).toFixed(2), 'KB');
    console.log('\n💡 Tip: Run this script whenever you update your resume:');
    console.log('   node scripts/generate-resume-pdf.js');

  } catch (error) {
    console.error('\n❌ Error generating resume PDF:');
    console.error(error.message);
    
    if (error.message.includes('net::ERR_CONNECTION_REFUSED')) {
      console.error('\n💡 Make sure your Next.js dev server is running:');
      console.error('   npm run dev');
    }
    
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run if called directly
if (require.main === module) {
  generateResumePDF();
}

module.exports = { generateResumePDF };
