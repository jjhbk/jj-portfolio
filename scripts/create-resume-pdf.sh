#!/bin/bash

# Resume PDF Generator Script
# This script generates a PDF from the /resume page using Playwright

set -e

echo "🚀 Resume PDF Generator"
echo "========================"
echo ""

# Check if next is running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "❌ Error: Next.js dev server is not running"
    echo ""
    echo "Please start the dev server first:"
    echo "  npm run dev"
    echo ""
    exit 1
fi

# Check if npx is available
if ! command -v npx &> /dev/null; then
    echo "❌ Error: npx is not installed"
    exit 1
fi

echo "🌐 Connecting to http://localhost:3000/resume..."

# Use Playwright to generate PDF
npx playwright-core pdf \
    --viewport-size=1280,1024 \
    --wait-for-timeout=3000 \
    http://localhost:3000/resume \
    public/resume/Jathin_Jagannath_Resume.pdf

if [ -f "public/resume/Jathin_Jagannath_Resume.pdf" ]; then
    echo ""
    echo "✅ Resume PDF generated successfully!"
    echo "📄 Location: public/resume/Jathin_Jagannath_Resume.pdf"
    echo "📊 Size: $(du -h public/resume/Jathin_Jagannath_Resume.pdf | cut -f1)"
    echo ""
    echo "The download link on your portfolio will now work!"
else
    echo "❌ Failed to generate PDF"
    exit 1
fi
