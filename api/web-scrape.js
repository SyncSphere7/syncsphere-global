import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Launch browser with minimal resources
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();
    
    // Set timeout and user agent
    await page.setDefaultTimeout(10000);
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    // Navigate to URL
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 10000 });
    
    // Extract website data
    const websiteData = await page.evaluate(() => {
      // Get title
      const title = document.title || '';
      
      // Get meta description
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      
      // Get main content (first 1500 characters)
      const bodyText = document.body?.innerText || '';
      const content = bodyText.replace(/\s+/g, ' ').trim().slice(0, 1500);
      
      // Get headings
      const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
        .map(h => h.textContent?.trim())
        .filter(Boolean)
        .slice(0, 5);
      
      // Get links count
      const linksCount = document.querySelectorAll('a').length;
      
      // Check if it's an e-commerce site
      const isEcommerce = !!(
        document.querySelector('[class*="cart"], [class*="shop"], [class*="product"], [id*="cart"], [id*="shop"]') ||
        bodyText.toLowerCase().includes('add to cart') ||
        bodyText.toLowerCase().includes('buy now')
      );
      
      // Check if it's a business/corporate site
      const isBusiness = !!(
        document.querySelector('[class*="about"], [class*="service"], [class*="contact"]') ||
        bodyText.toLowerCase().includes('about us') ||
        bodyText.toLowerCase().includes('our services')
      );
      
      return {
        title,
        description: metaDescription,
        content,
        headings,
        linksCount,
        isEcommerce,
        isBusiness,
        wordCount: bodyText.split(/\s+/).length
      };
    });
    
    await browser.close();
    
    res.status(200).json({
      success: true,
      data: websiteData,
      analyzedAt: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Web scraping error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to analyze website',
      message: error.message
    });
  }
}