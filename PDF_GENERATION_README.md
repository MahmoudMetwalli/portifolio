# PDF Generation Troubleshooting

## Changes Made

### 1. Updated PDF Generation Route (`/api/generate-cv`)
- **Switched from `puppeteer` to `puppeteer-core`** with `@sparticuz/chromium` for serverless compatibility
- **Added comprehensive error handling** with detailed logging
- **Added production environment detection** to use appropriate Chrome binary
- **Added route configuration** for 30-second timeout
- **Added browser cleanup** to prevent memory leaks

### 2. Added Fallback Client-Side PDF Generation
- **Updated `DownloadCVButton`** with fallback mechanism
- **Uses `html2canvas` and `jsPDF`** for client-side generation when server fails
- **Automatic fallback** - tries server-side first, then client-side if it fails

### 3. Added Configuration Files
- **`vercel.json`** - Sets function timeout to 30 seconds
- **Test page** at `/public/test-pdf.html` for debugging

## Packages Added
```bash
npm install puppeteer-core @sparticuz/chromium html2canvas jspdf
npm install --save-dev @types/html2canvas
```

## How It Works Now

1. **Server-side generation** (preferred):
   - Uses `puppeteer-core` with serverless-optimized Chromium
   - Better quality and faster generation
   - Works in production environments like Vercel

2. **Client-side fallback**:
   - If server-side fails, automatically tries client-side
   - Uses browser APIs to generate PDF from current page
   - Works offline and doesn't require server resources

## Testing

1. **Local development**: 
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000/test-pdf.html` to test PDF generation

2. **Production deployment**:
   - The serverless function should now work on Vercel
   - Check Vercel function logs for detailed error information
   - Client-side fallback provides backup solution

## Common Issues & Solutions

### Issue: "Failed to generate PDF" in production
**Solution**: The updated code should fix this by:
- Using serverless-compatible Chromium binary
- Adding proper timeout configuration
- Providing client-side fallback

### Issue: Long loading times
**Solution**: 
- Increased function timeout to 30 seconds
- Added background process handling
- Client-side fallback for instant generation

### Issue: Memory issues
**Solution**:
- Added proper browser cleanup
- Using single-process mode
- Optimized Chrome arguments for serverless

## Monitoring

Check the Vercel function logs for:
- "Starting PDF generation..." - Function started
- "Browser launched successfully" - Puppeteer working
- "PDF generated successfully" - Success
- Error messages with stack traces for debugging

If server-side fails, the client-side fallback will automatically trigger with console logs showing the transition.
