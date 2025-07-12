import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { NextRequest, NextResponse } from 'next/server';

// Route configuration for serverless
export const maxDuration = 30; // seconds
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  let browser = null;
  
  try {
    console.log('Starting PDF generation...');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Platform:', process.platform);
    
    const url = new URL(req.url);
    const cvUrl = `${url.origin}/cv`;
    console.log('CV URL:', cvUrl);

    // Enhanced browser launch options for production
    const isProduction = process.env.NODE_ENV === 'production';
    console.log('Is production:', isProduction);
    
    const launchOptions = {
      args: isProduction ? chromium.args : [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-gpu',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor'
      ],
      executablePath: isProduction ? await chromium.executablePath() : undefined,
      headless: true,
      timeout: 30000
    };
    
    console.log('Launch options:', JSON.stringify(launchOptions, null, 2));
    
    browser = await puppeteer.launch(launchOptions);
    
    console.log('Browser launched successfully');
    const page = await browser.newPage();
    
    // Set viewport and user agent
    await page.setViewport({ width: 1200, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    await page.emulateMediaType('screen');
    
    console.log('Navigating to CV page...');
    await page.goto(cvUrl, { 
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    console.log('Page loaded, generating PDF...');
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in',
      },
      timeout: 30000
    });
    
    console.log('PDF generated successfully');
    await browser.close();
    browser = null;

    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Mahmoud_Metwalli_CV.pdf"',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    
    // Ensure browser is closed on error
    if (browser) {
      try {
        await browser.close();
      } catch (closeError) {
        console.error('Error closing browser:', closeError);
      }
    }
    
    return new NextResponse(
      JSON.stringify({ 
        error: 'Failed to generate PDF',
        details: error instanceof Error ? error.message : 'Unknown error'
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
